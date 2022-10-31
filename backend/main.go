package main

import (
	"fmt"
	websocket2 "learning-websocket/pkg/websocket"
	"log"
	"net/http"
)

func serveWs(rw http.ResponseWriter, r *http.Request) {
	ws, err := websocket2.Upgrade(rw, r)
	if err != nil {
		fmt.Fprintf(rw, "%+v\n", err)
	}
	//go websocket2.Writer(ws)
	websocket2.Reader(ws)
}

func main() {
	http.HandleFunc("/ws", serveWs)

	err := http.ListenAndServe(":4000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
