import React from 'react';

import './course-list-item.css';

const CourseListItem = ({items, onRemove}) => {
    const { label, comment, startDate, endDate } = items;
    return (
        <span className="course-list-item">        
            <div className="label">{label}</div>
            <div className="duration">({startDate} - {endDate})</div>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onRemove}>
                <span className="fa fa-trash-o"></span>
            </button>
            <button type="button"
                    className="btn btn-outline-warning btn-sm float-right">
                <span className="fa fa-pencil-square-o"></span>
            </button>
            <div className="comment">{comment}</div>
        </span>
    );
};

export default CourseListItem;