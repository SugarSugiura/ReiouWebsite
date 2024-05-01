// web/app/login/login.go

package login

import (
	"crypto/rand"
	"encoding/base64"
	"log"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
)

// Handler for our login.
func Handler(auth *authenticator.Authenticator, store cookie.Store) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		state, err := generateRandomState()
		if err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		// Save the state inside the session.
		session := sessions.Default(ctx)
		session.Set("state", state)
		if err := session.Save(); err != nil {
			ctx.String(http.StatusInternalServerError, err.Error())
			return
		}

		//ここからredis
		profile := session.Get("profile")

		rdb := redis.NewClient(&redis.Options{
			Addr:     "redis:6379", // Redisのアドレスとポート
			Password: "",           // Redisに設定したパスワード（設定していない場合は空文字列）
			DB:       0,            // 使用するデータベース番号
		})

		stateVal := session.Get("state")
		stateStr, ok := stateVal.(string)
		if !ok {
			// state が文字列でない場合のエラーハンドリング
			return
		}

		err = rdb.Set(ctx, stateStr, profile.(map[string]interface{})["aud"].(string), 0).Err()
		if err != nil {
			log.Println(err)
		}

		log.Println("セット終わり")

		val, err := rdb.Get(ctx, stateStr).Result()
		if err != nil {
			panic(err)
		}
		log.Println(stateStr, val)

		log.Println("ゲット終わり")

		ctx.Redirect(http.StatusTemporaryRedirect, auth.AuthCodeURL(state))
	}
}

func generateRandomState() (string, error) {
	b := make([]byte, 32)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}

	state := base64.StdEncoding.EncodeToString(b)

	return state, nil
}
