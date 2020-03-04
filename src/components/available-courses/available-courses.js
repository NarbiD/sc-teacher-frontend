import React from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course-button/create-course-button';
import PageTitle from '../page-title/page-title';

const AvailableCourses = ({ items, onRemove, onEdit }) => {
    return (
        <div className="container">
            <PageTitle text="Доступні курси" />
            <CourseList items={ items } 
                        onRemove={ onRemove }
                        onEdit={ onEdit } />
            <CreateCourse />
        </div>
    );
}

export default AvailableCourses;
