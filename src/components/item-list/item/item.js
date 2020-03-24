import React from 'react';

import './item.css';
import { Link } from 'react-router-dom';
import DeleteButton from '../../buttons/delete-button';
import EditButton from '../../buttons/edit-button';

const Item = ({ item }) => {
    const { id, label, comment, startDate, endDate } = item;
    return (
        <span className="course-list-item">        
            <Link to={`/courses/${id}`} className="label">{label}</Link>
            <div className="duration">({startDate} - {endDate})</div>
            <DeleteButton link={`/courses/${id}/delete`} />
            <EditButton link={`/courses/${id}/edit`}  />
            <div className="comment">{comment}</div>
        </span>
    );
};

export default Item;