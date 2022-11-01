import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import {connect, sendMsg} from "./api";
import Connect from "./components/Connect";
import Chat from "./components/Chat";

function App() {
    const [socket, setSocket] = useState(null);
    const [username, setUsername] = useState("Kaspar");
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        console.log(chatHistory)
    }, [chatHistory])

  return (
    <div className="App">
      <Header />
        {socket ? (
            <Chat username={username} socket={socket} chatHistory={chatHistory} />
        ) : (
            <Connect setSocket={setSocket} username={username} setUsername={setUsername} chatHistory={chatHistory} setChatHistory={setChatHistory} />
        )}
    </div>
  );
}

export default App;
