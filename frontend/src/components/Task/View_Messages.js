import React, { useEffect, useState } from "react";
import "./View_Messages.css";

function View_Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/contact-messages`)
            .then(res => res.json())
            .then(data => setMessages(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="messages-container">
            <h2 className="messages-title">Contact Messages</h2>
            {messages.length === 0 ? (
                <p className="no-messages">No messages yet.</p>
            ) : (
                messages.map((m, index) => (
                    <div key={index} className="message-card">
                        <p><b>Name:</b> {m.name}</p>
                        <p><b>Email:</b> {m.email}</p>
                        <p><b>Message:</b> {m.message}</p>
                        <p><b>Date:</b> {new Date(m.createdAt).toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default View_Messages;