import React from 'react';
import Message from '../messages/message';

import './message-container.css'

const MessageContainer = ({ messages }) => {
    const messagesView = messages.map((message) => {
        return <Message id={message.id}
                text={message.text}
                type={message.type}
                time={message.time}
                mark={message.mark}
                content={message.content}
                attachment={message.attachment} />
    });
    return <div className="message-container container border rounded overflow-auto">
            {messagesView}
        </div>
}

export default MessageContainer;