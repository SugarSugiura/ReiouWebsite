package main

import (
	"encoding/gob"
	"github.com/SugarSugiura/ReiouWebsite/platform/middleware"
	"github.com/SugarSugiura/ReiouWebsite/web/app/callback"
	"github.com/SugarSugiura/ReiouWebsite/web/app/login"
	"github.com/SugarSugiura/ReiouWebsite/web/app/logout"
	"github.com/SugarSugiura/ReiouWebsite/web/app/user"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"

	"github.com/joho/godotenv"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Failed to load the env vars: %v", err)
	}

	auth, err := authenticator.New()
	if err != nil {
		log.Fatalf("Failed to initialize the authenticator: %v", err)
	}

	rtr := newRouter(auth)

	log.Print("Server listening on http://localhost:8000/")
	if err := http.ListenAndServe("0.0.0.0:8000", rtr); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}

// NewRouter registers the routes and returns the router.
func newRouter(auth *authenticator.Authenticator) *gin.Engine {
	router := gin.Default()

	// To store custom types in our cookies,
	// we must first register them using gob.Register
	gob.Register(map[string]interface{}{})

	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("auth-session", store))

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
	router.GET("/login", login.Handler(auth))
	router.GET("/callback", callback.Handler(auth))
	router.GET("/user", middleware.IsAuthenticated, user.Handler)
	router.GET("/logout", logout.Handler)

	return router
}
