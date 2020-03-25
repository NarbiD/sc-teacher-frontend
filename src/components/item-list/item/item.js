import React from 'react';

import './item.css';
import { Link } from 'react-router-dom';
import ButtonsGroup from '../../buttons-group/buttons-group';

const Item = ({ item }) => {
    const { id, label, comment, startDate, endDate } = item;
    return (
        <span className="course-list-item">        
            <Link to={`/courses/${id}`} className="label">{label}</Link>
            <div className="duration">({startDate} - {endDate})</div>
            <ButtonsGroup deleteLink={`/courses/${id}/predelete`}
                          editLink={`/courses/${id}/edit`} />
            <div className="comment">{comment}</div>
        </span>
    );
};

export default Item;