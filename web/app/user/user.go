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

// Handler for our logged-in user page.
func Handler(ctx *gin.Context) {
	session := sessions.Default(ctx)
	profile := session.Get("profile")

	ctx.HTML(http.StatusOK, "user.html", profile)
	log.Println(profile)
}

type User struct {
	ID    string
	Email string
	Name  string
}

type UserService interface {
	GetUserByEmail(ctx context.Context, email string) (*User, error)
	CreateUser(ctx context.Context, user User) (*User, error)
}

type userService struct {
	db *sql.DB
}

func NewUserService(db *sql.DB) UserService {
	return &userService{db: db}
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
