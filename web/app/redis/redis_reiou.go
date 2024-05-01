package redis_reiou

import (
	"log"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

func Handler(ctx *gin.Context) {

	session := sessions.Default(ctx)

	profile := session.Get("profile")

	rdb := redis.NewClient(&redis.Options{
		Addr:     "redis:6379", // Redisのアドレスとポート
		Password: "",               // Redisに設定したパスワード（設定していない場合は空文字列）
		DB:       0,                // 使用するデータベース番号
	})

	err := rdb.Set(ctx, "aud", profile.(map[string]interface{})["aud"].(string), 0).Err()
	if err != nil {
		log.Println(err)
	}

	log.Println("セット終わり")

	val, err := rdb.Get(ctx, "aud").Result()
	if err != nil {
		panic(err)
	}
	log.Println("key", val)

	log.Println("ゲット終わり")

	val2, err := rdb.Get(ctx, "key2").Result()
	if err == redis.Nil {
		log.Println("key2 does not exist")
	} else if err != nil {
		panic(err)
	} else {
		log.Println("key2", val2)
	}

}
