import React from 'react';

type MessageProps = {
    sender: 'user' | 'ai';
    text: string;
};

const Message: React.FC<MessageProps> = ({ sender, text }) => (
    <div className={`message ${sender}`}>
        {text}
    </div>
);

export default Message;
