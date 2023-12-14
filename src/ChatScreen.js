import React, { useEffect, useState } from "react";

const ChatScreen = ({ selectedConversation }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [title, setTitle] = useState('Chat')

  useEffect(() => {
    if (selectedConversation == null) {
        setTitle('Chat')
    } else {
        setTitle(selectedConversation.name)
    }
    setChatMessages([])
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: message },
      ]);
      setMessage("");
    }
  };


  return (
    <div style={{ flex: 1, padding: '20px' }}>
      <h2>{title}</h2>
      {selectedConversation ? (
        <>
          <div
            style={{
              border: '1px solid #ccc',
              height: '80%',
              overflowY: 'auto',
              marginBottom: '10px',
            }}
          >
            {chatMessages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flex: 1, marginRight: '10px' }}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      ) : (
        <p>Select a conversation to start chatting</p>
      )}
    </div>
  );
};

export default ChatScreen;