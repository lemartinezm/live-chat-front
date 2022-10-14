import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://127.0.0.1:3000/");

function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat message", currentMessage);
    setCurrentMessage("");
  };

  return (
    <main className="App">
      <ul id="messages">
        {messages.map((message, index) => (
          <li key={`msg-${index}`}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          name="input"
          placeholder="Write your message here"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default App;
