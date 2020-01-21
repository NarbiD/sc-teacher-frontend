import React from 'react';

import './course-list.css'

import CourseListItem from '../course-item/course-list-item'

const CourseList = ({ items }) => {
    const courseItems = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <CourseListItem { ...itemProps } />
            </li>
        )
    });
    return (<ul className="list-group">{courseItems}</ul>)
}

export default CourseList;