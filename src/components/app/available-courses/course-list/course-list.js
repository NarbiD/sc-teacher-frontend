import React from 'react';

import CourseListItem from '../course-item/course-list-item'

const CourseList = ({ items }) => {
    const className = 'course-list';
    const courseItems = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}>
                <CourseListItem { ... itemProps } />
            </li>
        )
    });
    return (<ul className={className}>{courseItems}</ul>)
}

export default CourseList;