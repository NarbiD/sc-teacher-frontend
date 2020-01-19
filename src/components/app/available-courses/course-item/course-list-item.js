import React from 'react';

const CourseListItem = ({ name, comment }) => {
    let className = 'course-list-item';
    return (
        <span className={className}>        
            <span>{name}</span>
            <span>{comment}</span>
            <button type="button">
                <b>Edit</b>
            </button>
        </span>
    );
};

export default CourseListItem;