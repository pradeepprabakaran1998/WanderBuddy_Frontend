import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chatapp = () => {
    var chatroomid = localStorage.getItem('chatroomID')
    const baseURL = `http://127.0.0.1:8000/messages/${chatroomid}/`
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMessages(response.data)
        })
    }, [])

    const sendMessage = async () => {
        var msg = document.getElementById('message-input').value
        await axios.post(baseURL, { 'content': msg }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            (response) => {
                console.log(response.data)
                setMessages(response.data)
            }
        )
            .catch((error) => console.log(error))
    }

    return (
        <div className="chat-container">
            <div className="chat-messages" id="chat-messages">
                {messages.map((msg, index) =>
                    <p key={index}>{msg.content}</p>
                )}

            </div>
            <div className="chat-input">
                <input type="text" name="message" id="message-input" placeholder="Type your message..." />
                <button id="send-button" onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Chatapp