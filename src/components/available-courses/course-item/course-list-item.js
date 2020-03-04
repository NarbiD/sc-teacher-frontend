import React from 'react';

import './course-list-item.css';
import { Link } from 'react-router-dom';

const CourseListItem = ({ items, onRemove }) => {
    const { id, label, comment, startDate, endDate } = items;
    return (
        <span className="course-list-item">        
            <div className="label">{label}</div>
            <div className="duration">({startDate} - {endDate})</div>
            <Link to={"/courses/"} 
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={ onRemove }>
                <span className="fa fa-trash-o"></span>
            </Link>
            <Link to={`/edit-course/${id}`} 
                    className="btn btn-outline-warning btn-sm float-right">
                <span className="fa fa-pencil-square-o"></span>
            </Link>
            <div className="comment">{comment}</div>
        </span>
    );
};

export default CourseListItem;