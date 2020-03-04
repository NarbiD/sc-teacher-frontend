import React from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course/create-course';
import Title from './title/title';

const AvailableCourses = ({ items, onRemove, onEdit }) => {
    return (
        <div className="container">
            <Title />
            <CourseList items={ items } 
                        onRemove={ onRemove }
                        onEdit={ onEdit } />
            <CreateCourse />
        </div>
    );
}

export default AvailableCourses;
