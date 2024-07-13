package main

import (
	sql "database/sql"
	"encoding/gob"
	"fmt"
	"github.com/SugarSugiura/ReiouWebsite/platform/middleware"
	"github.com/gin-contrib/sessions/redis"
	"log"
	"net/http"
	"os"

	"github.com/SugarSugiura/ReiouWebsite/web/app/callback"
	"github.com/SugarSugiura/ReiouWebsite/web/app/login"
	"github.com/SugarSugiura/ReiouWebsite/web/app/logout"
	"github.com/SugarSugiura/ReiouWebsite/web/app/user"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"

	"github.com/joho/godotenv"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
	_ "github.com/lib/pq"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Failed to load the env vars: %v", err)
	}

	auth, err := authenticator.New()
	if err != nil {
		log.Fatalf("Failed to initialize the authenticator: %v", err)
	}

	connStr := os.Getenv("DATABASE_URL")
	if connStr == "" {
		log.Fatal("DATABASE_URL is not set")
	}

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("DB successfully connected!")

	//redisClient := redis.NewClient(&redis.Options{
	//	Addr:     "redis:6379", // Redisのアドレスとポート
	//	Password: "",           // Redisに設定したパスワード（設定していない場合は空文字列）
	//	DB:       0,            // 使用するデータベース番号
	//})

	rtr := newRouter(auth, db)

	log.Print("Server listening on http://localhost:8000/")
	if err := http.ListenAndServe("0.0.0.0:8000", rtr); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}

// NewRouter registers the routes and returns the router.
// ここでは関数名(引数 引数の型) 関数の返り値の型
func newRouter(auth *authenticator.Authenticator, db *sql.DB) *gin.Engine {
	router := gin.Default()

	// To store custom types in our cookies,
	// we must first register them using gob.Register
	gob.Register(map[string]interface{}{})

	// Redisセッションストアの設定
	redisStore, err := redis.NewStore(10, "tcp", "redis:6379", "", []byte("secret"))
	if err != nil {
		log.Fatalf("Failed to create redis store: %v", err)
	}
	router.Use(sessions.Sessions("auth-session", redisStore))

	router.Static("/page", "./assets/html")
	router.Static("/css", "./assets/css")
	router.Static("/img", "./assets/img")
	router.Static("/js", "./assets/js")
	router.Static("/kif", "./assets/kif")
	router.Static("/mp4", "./assets/mp4")
	router.Static("/sound", "./assets/sound")

	router.LoadHTMLGlob("web/template/*")

	//router.GET("/", func(ctx *gin.Context) {
	//	ctx.HTML(http.StatusOK, "home.html", nil)
	//})

	userService := user.NewUserService(db)
	router.GET("/login", login.Handler(auth))
	router.GET("/callback", callback.Handler(auth, userService))
	router.GET("/user", middleware.IsAuthenticated, user.Handler(userService))
	router.GET("/logout", logout.Handler)

	return router
}
