import React, { useState, ChangeEvent } from 'react';
import { getChatResponse } from '../services/chatAi';
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 
import Message from './Message';
import './ChatBox.scss';

type MessageType = {
    sender: 'user' | 'ai';
    text: string;
};

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [input, setInput] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(prevState => !prevState);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages: MessageType[] = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);

        try {
            const aiResponse = await getChatResponse(input);

            setMessages([
                ...newMessages,
                { sender: 'ai', text: aiResponse },
            ]);
        } catch (error) {
            setMessages([
                ...newMessages,
                { sender: 'ai', text: 'Произошла ошибка. Попробуйте снова.' + error },
            ]);
        }

        setInput('');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
            <div className={`chat-container ${isExpanded ? "expanded" : ""} ${isClosed ? "collapsed" : ""}`}>
              <button className="close-icon" onClick={() => setIsClosed(!isClosed)}>x</button>
                <div className="chat-header" onClick={toggleExpand}>
                    <h2>Chat with Assistant</h2>
                    <button className="expand-icon">
                        {isExpanded ?  <FaArrowUp /> : <FaArrowDown />}
                    </button>
                </div>
                <div className="messages">
                    {messages.map((msg, index) => (
                        <Message key={index} sender={msg.sender} text={msg.text} />
                    ))}
                </div>
                <form className="input-container" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Напишите вопрос о фильмах..."
                    />
                    <button className="send-button" type="submit">Отправить</button>
                </form>
            </div>
    );
};

export default ChatBox;
