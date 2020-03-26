import React from 'react';

import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ item, link, buttons}) => {
    const { label, comment, startDate, endDate } = item;
    return (
        <span className="list-item">        
            <Link to={link} className="label">{label}</Link>
            {startDate && endDate ? <div className="duration">({startDate} - {endDate})</div> : ""}
            {buttons}
            <div className="comment">{comment}</div>
        </span>
    );
};

export default Item;