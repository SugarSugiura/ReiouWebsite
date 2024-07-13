// web/app/user/user.go

package user

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"context"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

const SessionIDKey = "session_id"

// Handler for our logged-in user page.
func Handler(userService UserService) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		session := sessions.Default(ctx)
		userID := session.Get(SessionIDKey)

		fmt.Println("====")
		fmt.Println(userID) // user.IDが入っている
		fmt.Println("====")
		if userID == nil {
			ctx.String(http.StatusUnauthorized, "User not logged in")
			return
		}

		// userIDを使ってDBからユーザープロファイルを取得
		user, err := userService.GetUserByID(ctx, userID.(string))
		if err != nil {
			log.Printf("Failed to get user by ID: %v", err)
			ctx.String(http.StatusInternalServerError, "Failed to get user")
			return
		}

		fmt.Println("====")
		fmt.Printf("%#v\n", user) // データベースから取得したユーザープロファイル
		log.Printf("User: ID=%s, Email=%s, Name=%s", user.ID, user.Email, user.Name)
		fmt.Println("====")

		// todo: profileはsessionのidを使ってDBから取得する?

		ctx.HTML(http.StatusOK, "user.html", user)
	}
}

type User struct {
	ID    string
	Email string
	Name  string
}

type UserService interface {
	GetUserByID(ctx context.Context, id string) (*User, error)
	GetUserByEmail(ctx context.Context, email string) (*User, error)
	CreateUser(ctx context.Context, user User) (*User, error)
}

type userService struct {
	db *sql.DB
}

func NewUserService(db *sql.DB) UserService {
	return &userService{db: db}
}

// GetUserByID gets a user by their ID.
func (s *userService) GetUserByID(ctx context.Context, id string) (*User, error) {
	var user User
	query := "SELECT id, email, name FROM users WHERE id = $1"
	err := s.db.QueryRowContext(ctx, query, id).Scan(&user.ID, &user.Email, &user.Name)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil // ユーザーが見つからない場合はnilを返す
		}
		return nil, fmt.Errorf("query failed: %v", err)
	}
	return &user, nil
}

func (s *userService) GetUserByEmail(ctx context.Context, email string) (*User, error) {
	var user User
	query := "SELECT id, email, name FROM users WHERE email = $1"
	err := s.db.QueryRowContext(ctx, query, email).Scan(&user.ID, &user.Email, &user.Name)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil // ユーザーが見つからない場合はnilを返す
		}
		return nil, fmt.Errorf("query failed: %v", err)
	}
	return &user, nil
}

func (s *userService) CreateUser(ctx context.Context, user User) (*User, error) {
	query := "INSERT INTO users (email, name) VALUES ($1, $2) RETURNING id"
	err := s.db.QueryRowContext(ctx, query, user.Email, user.Name).Scan(&user.ID)
	if err != nil {
		return nil, fmt.Errorf("insert failed: %v", err)
	}
	return &user, nil
}
