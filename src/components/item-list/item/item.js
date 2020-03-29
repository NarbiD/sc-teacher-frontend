import React from 'react';

import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ item, link, buttons, time }) => {
    const { label, comment, startDate, endDate } = item;
    return (
        <span className="list-item">        
            <Link to={link} className="label">{label}</Link>
            {startDate && endDate ? <div className="duration">({startDate} - {endDate})</div> : 
             startDate && time ? <div className="date-and-time">({startDate}, {time})</div> : ""}
            {buttons}
            <div className="comment">{comment}</div>
        </span>
    );
};

export default Item;