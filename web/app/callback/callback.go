// web/app/callback/callback.go

package callback

import (
	userPkg "github.com/SugarSugiura/ReiouWebsite/web/app/user"
	"log"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
)

const sessionIDKey = "session_id"

// Handler for our callback.
func Handler(auth *authenticator.Authenticator, userService userPkg.UserService) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		if ctx.Query("state") != session.Get("state") {
			ctx.String(http.StatusBadRequest, "Invalid state parameter.")
			return
		}

		// Exchange an authorization code for a token.
		token, err := auth.Exchange(ctx.Request.Context(), ctx.Query("code"))
		if err != nil {
			ctx.String(http.StatusUnauthorized, "Failed to exchange an authorization code for a token.")
			return
		}

		idToken, err := auth.VerifyIDToken(ctx.Request.Context(), token)
		if err != nil {
			ctx.String(http.StatusInternalServerError, "Failed to verify ID Token.")
			return
		}
		// IDトークンからユーザー情報を取得
		var profile map[string]interface{}
		if err := idToken.Claims(&profile); err != nil {
			println("Failed to get user profile: %v", err)
			ctx.String(http.StatusInternalServerError, "Failed to get user profile: %v", err)
			return
		}

		log.Printf("profile: %v", profile)

		email, ok := profile["email"].(string)
		if !ok {
			ctx.String(http.StatusBadRequest, "Invalid or missing email in profile.")
			return
		}

		// ユーザーが存在するか確認
		user, err := userService.GetUserByEmail(ctx, email)
		if err != nil {
			// ユーザーが存在しない場合、新規作成
			log.Printf("profile: %v", profile)
			p := userPkg.User{
				ID:    uuid.NewString(),
				Email: email,
				Name:  profile["name"].(string),
			}
			user, err = userService.CreateUser(ctx, p)
			if err != nil {
				ctx.String(http.StatusInternalServerError, "Failed to create user: %v", err)
				return
			}
		}

		// ユーザー情報をセッションに保存
		session.Set(sessionIDKey, user.ID)
		if err := session.Save(); err != nil {
			ctx.String(http.StatusInternalServerError, "Failed to save session: %v", err)
			return
		}

		// ユーザーページにリダイレクト
		ctx.Redirect(http.StatusFound, "/user")
	}
}
