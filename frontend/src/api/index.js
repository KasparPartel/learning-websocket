const newWebSocket = (url) => (new WebSocket(url));

const connect = (ws, setSocket, cb) => {
    console.log("Attempting websocket connection...")

    ws.onopen = () => {
        console.log("Connection successful")
    }

    ws.onclose = () => {
        console.log("Connection closed")
        setSocket(null)
    }

    ws.onerror = (e) => {
        console.error(e)
    }

    ws.onmessage = (msg) => {
        // console.log(msg)
        cb(msg)
    }
}

const sendMsg = (body, username, ws) => {
    const msg = {
        type: "message",
        text: body,
        username: username,
        date: Date.now()
    }

    try {
        // console.log(msg)
        ws.send(JSON.stringify(msg))
    } catch (e) {
        console.error(e)
    }
}

export {sendMsg, connect, newWebSocket}

