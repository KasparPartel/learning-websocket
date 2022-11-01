const ChatHistory = ({chatHistory}) => {
    // console.log(chatHistory)

    return (
        <div className="chat_history">
            <h2>Chat history</h2>
            {chatHistory.map((msg, index) => (
                <p key={index}>{msg}</p>
            ))}
        </div>
    )
}

export default ChatHistory;