package redis_test

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

func Handler(ctx *gin.Context) {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", // Redisのアドレスとポート
		Password: "",               // Redisに設定したパスワード（設定していない場合は空文字列）
		DB:       0,                // 使用するデータベース番号
	})

	err := rdb.Set(ctx, "key", "value", 0).Err()
	if err != nil {
		log.Println(err)
	}

	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	log.Println("key", val)

	val2, err := rdb.Get(ctx, "key2").Result()
	if err == redis.Nil {
		log.Println("key2 does not exist")
	} else if err != nil {
		panic(err)
	} else {
		log.Println("key2", val2)
	}

}
