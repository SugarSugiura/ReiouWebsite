package middleware

import (
  "net/http"

  "github.com/SugarSugiura/ReiouWebsite/web/app/user"
  "github.com/gin-contrib/sessions"
  "github.com/gin-gonic/gin"
)

// IsAuthenticated is a middleware that checks if
// the user has already been authenticated previously.
func IsAuthenticated(ctx *gin.Context) {
  if sessions.Default(ctx).Get(user.SessionIDKey) == nil {
    ctx.Redirect(http.StatusSeeOther, "/")
  } else {
    ctx.Next()
  }
}
