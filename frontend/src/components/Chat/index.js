import {sendMsg} from "../../api";
import {useState} from "react";
import ChatHistory from "../ChatHistory";

const Chat = ({username, socket}) => {
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setMsg(e.target.value)
    }

    const send = () => {
        sendMsg(msg, username, socket)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        send()
        setMsg("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={msg} onChange={handleChange}/>
                <button>Send</button>
            </form>

            {/*<ChatHistory />*/}
        </>
    )
}

export default Chat;