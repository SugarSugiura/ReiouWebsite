// platform/router/router.go

package router

import (
	"encoding/gob"
	"github.com/SugarSugiura/ReiouWebsite/platform/middleware"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
	"github.com/SugarSugiura/ReiouWebsite/web/app/callback"
	"github.com/SugarSugiura/ReiouWebsite/web/app/login"
	"github.com/SugarSugiura/ReiouWebsite/web/app/logout"
	"github.com/SugarSugiura/ReiouWebsite/web/app/user"
)

// New registers the routes and returns the router.
func New(auth *authenticator.Authenticator) *gin.Engine {
	router := gin.Default()

	// To store custom types in our cookies,
	// we must first register them using gob.Register
	gob.Register(map[string]interface{}{})

	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("auth-session", store))

	router.Static("/public", "web/static")
	router.LoadHTMLGlob("web/template/*")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "home.html", nil)
	})
	router.GET("/login", login.Handler(auth))
	router.GET("/callback", callback.Handler(auth))
	router.GET("/user", middleware.IsAuthenticated, user.Handler)
	router.GET("/logout", logout.Handler)

	return router
}
