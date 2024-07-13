// web/app/logout/logout.go

package logout

import (
	"github.com/gin-contrib/sessions"
	"net/http"
	"net/url"
	"os"

	"github.com/gin-gonic/gin"
)

// Handler for our logout.
func Handler(ctx *gin.Context) {
	session := sessions.Default(ctx)
	logoutUrl, err := url.Parse("https://" + os.Getenv("AUTH0_DOMAIN") + "/v2/logout")
	if err != nil {
		ctx.String(http.StatusInternalServerError, err.Error())
		return
	}

	scheme := "http"
	if ctx.Request.TLS != nil {
		scheme = "https"
	}

	returnTo, err := url.Parse(scheme + "://" + ctx.Request.Host + "/login")
	if err != nil {
		ctx.String(http.StatusInternalServerError, err.Error())
		return
	}

	parameters := url.Values{}
	parameters.Add("returnTo", returnTo.String())
	parameters.Add("client_id", os.Getenv("AUTH0_CLIENT_ID"))
	logoutUrl.RawQuery = parameters.Encode()

	session.Clear()
	session.Options(sessions.Options{
		MaxAge: -1,
	})
	if err := session.Save(); err != nil {
		ctx.String(http.StatusInternalServerError, "Failed to logout: %v", err)
		return
	}

	ctx.Redirect(http.StatusTemporaryRedirect, logoutUrl.String())
}
