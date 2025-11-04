package main

import (
	"encoding/json"
	"net/http"
	"os"
	"time"
)

type payload struct {
	Lang    string `json:"lang"`
	Host    string `json:"host"`
	Time    string `json:"time"`
	Message string `json:"message"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(payload{
		Lang:    "go",
		Host:    os.Getenv("HOSTNAME"),
		Time:    time.Now().UTC().Format(time.RFC3339),
		Message: "Hello from Go container",
	})
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":7002", nil)
}
