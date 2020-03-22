import React from 'react';
import CreateCourse from './create-course-button/create-course-button';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';

const AvailableCourses = ({ courses, onRemove, onEdit }) => {
    return (
        <div className="container">
            <PageTitle text="Доступні курси" />
            <ItemList items={ courses } 
                        onRemove={ onRemove }
                        onEdit={ onEdit } />
            <CreateCourse />
        </div>
    );
}

export default AvailableCourses;
