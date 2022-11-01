import {useState} from "react";
import {connect, newWebSocket} from "../../api";

const Connect = ({setSocket, username, setUsername, setChatHistory, chatHistory}) => {
    const [url, setUrl] = useState("ws://localhost:4000/ws");

    const handleSubmit = (e) => {
        e.preventDefault()

        const socket = newWebSocket(url)
        setSocket(socket)

        connect(socket, setSocket, (msg) => setChatHistory([...chatHistory, msg]))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="url">url: </label>
            <input type="text" name={"url"} value={url} onChange={(e) => setUrl(e.target.value)} required/>
            <br/>
            <label htmlFor="username">username: </label>
            <input type="text" name={"username"} value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <br/>
            <button>Connect</button>
        </form>
    )
};

export default Connect;