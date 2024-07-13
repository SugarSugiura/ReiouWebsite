package main

import (
	sql "database/sql"
	"encoding/gob"
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

	rtr := newRouter(auth, db)

	log.Print("Server listening on http://localhost:8000/")
	if err := http.ListenAndServe("0.0.0.0:8000", rtr); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}

// NewRouter registers the routes and returns the router.
func newRouter(auth *authenticator.Authenticator, db *sql.DB) *gin.Engine {
	router := gin.Default()

	gob.Register(map[string]interface{}{})

	redisStore, err := redis.NewStore(10, "tcp", "redis:6379", "", []byte("secret"))
	if err != nil {
		log.Fatalf("Failed to create redis store: %v", err)
	}
	redisStore.Options(sessions.Options{
		MaxAge: 3600,
	})
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

	authRequired := router.Group("/")
	authRequired.Use(middleware.IsAuthenticated)
	authRequired.GET("/user", user.Handler(userService))
	authRequired.GET("/logout", logout.Handler)

	return router
}
