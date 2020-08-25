import React from 'react';

import './item.css';
import { Link } from 'react-router-dom';
import Mark from '../mark/mark';

const Item = ({ item, link, buttons }) => {
    const { label, comment, startDate, endDate, time, status } = item;
    return (
        <span className="list-item row"> 
            <div className="col-lg-9">     
            <Link to={link} className="label">{label}</Link>
            <br />
            {startDate && endDate ? <div className="dates">({startDate} - {endDate})</div> : 
             startDate && time ? <div className="dates">({startDate}, {time})</div> : ""}
            {status ? <div className="progress">
                            <div className={`progress-bar bg-${status.complited?"success":"info"}`} role="progressbar" style={{width: status.progress}} aria-valuenow={status.progress} aria-valuemin="0" aria-valuemax="100">{status.progress}</div>
                      </div> : "" }
            <div className="comment">{comment}</div>
             </div>
             <div className="col-lg-3">
                {buttons}
                <br />
                { item.mark===undefined ? "" : <Mark link="" text={item.mark} /> }
            </div>
        </span>
    );
};

export default Item;