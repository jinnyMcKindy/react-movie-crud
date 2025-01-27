import React, { useState, ChangeEvent } from 'react';
import { getChatResponse } from '../services/chatAi';
import Message from './Message';

type MessageType = {
    sender: 'user' | 'ai';
    text: string;
};

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [input, setInput] = useState<string>('');

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
        <div className="chatbox">
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} sender={msg.sender} text={msg.text} />
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Напишите вопрос о фильмах..."
                />
                <button onClick={handleSend}>Отправить</button>
            </div>
        </div>
    );
};

export default ChatBox;
