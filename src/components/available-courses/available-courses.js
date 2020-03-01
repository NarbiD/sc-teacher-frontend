import React from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course/create-course';
import Title from './title/title';

const AvailableCourses = ({ items, onRemove }) => {
    console.log(onRemove);
    return (
        <div className="container">
            <Title />
            <CourseList items={ items } 
                        onRemove={ onRemove } />
            <CreateCourse />
        </div>
    );
}

export default AvailableCourses;
