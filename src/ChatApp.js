import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation
import io from 'socket.io-client';
import './ChatApp.css'; // Import the CSS file

const socket = io('http://localhost:5000'); // Replace with your server URL

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [greeted, setGreeted] = useState(false); // To track if greeting has been responded to

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const userMessage = { message, sender: 'user' };
    socket.emit('chat message', userMessage);
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    let botMessage;
    if (!greeted && (message.toLowerCase() === 'hi' || message.toLowerCase() === 'hello' || message.toLowerCase() === 'hey')) {
      botMessage = { message: 'Hey there, I am here to help you', sender: 'bot' };
      setGreeted(true);
    } else {
      const lawyerNumber = Math.floor(Math.random() * 20) + 1;
      botMessage = { message: `lawyer${lawyerNumber} is booked`, sender: 'bot' };
    }

    setMessages((prevMessages) => [...prevMessages, botMessage]);
    socket.emit('chat message', botMessage);

    setMessage('');
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div>
            <h1>LawLink</h1>
          </div>
          <div className="nav-elements">
            <ul className="menu3">
              <li>
                <NavLink exact to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/lawyers">Lawyers</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/ChatPage">Chatbot</NavLink> {/* Add this line */}
              </li>
              <li>
                <NavLink to="/">logout</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="chat-page">
        <h2>Real-time Chat</h2>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.message}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default ChatApp;
