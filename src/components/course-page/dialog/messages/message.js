import React from 'react';
import TextMessage from './text-message';

import './messages.css'
import BotMark from './bot-mark';
import ImageMessage from './image-message';
import FileMessage from './file-message';


const Message = ({id, text, time, type, mark, content, attachment}) => {
    const align = type==="input" ? "start" : "end";
    const message = content==="file"?<FileMessage text={text} file={attachment} /> :
                    content==="image"?<ImageMessage text={text} image={attachment} /> :
                    <TextMessage text={text} />
    return (
        <div className={`row justify-content-${align}`}>
            <div className={`message ${type}-message`}>
                {message}
                <div className="marks float-right">
                    {mark ? <BotMark /> : ""}
                    <span className="time">{time}</span>
                </div>
           </div> 
           
           
        </div>
    )
}

export default Message;