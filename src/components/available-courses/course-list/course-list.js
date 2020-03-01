import React from 'react';

import './course-list.css'

import CourseListItem from '../course-item/course-list-item'

const CourseList = ({ items, onRemove }) => {
    const courseItems = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <CourseListItem items={itemProps}
                                onRemove={()=>onRemove(id)} />
            </li>
        )
    });
    return (<ul className="list-group">{courseItems}</ul>)
}

export default CourseList;