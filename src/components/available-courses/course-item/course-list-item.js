import React from 'react';

import './course-list-item.css';

const CourseListItem = ({ label, comment, startDate, endDate }) => {
    return (
        <span className="course-list-item">        
            <div className="label">{label}</div>
            <div className="duration">({startDate} - {endDate})</div>
            <button type="button" className="btn btn-outline-warning btn-sm float-right">
                <span className="fa fa-pencil-square-o"></span>
            </button>
            <div className="comment">{comment}</div>
        </span>
    );
};

export default CourseListItem;