import React from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course/create-course';
import Title from './title/title';

const AvailableCourses = ({ items, onCreate }) => {
    return (
        <div>
            <Title />
            <CourseList items={ items } />
            <CreateCourse onCreate={ onCreate } />
        </div>
    );
}

export default AvailableCourses;
