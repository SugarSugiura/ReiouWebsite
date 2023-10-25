package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"

	"github.com/SugarSugiura/ReiouWebsite/platform/authenticator"
	"github.com/SugarSugiura/ReiouWebsite/platform/router"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Failed to load the env vars: %v", err)
	}

	auth, err := authenticator.New()
	if err != nil {
		log.Fatalf("Failed to initialize the authenticator: %v", err)
	}

	rtr := router.New(auth)

	log.Print("Server listening on http://localhost:8000/")
	if err := http.ListenAndServe("0.0.0.0:8000", rtr); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
