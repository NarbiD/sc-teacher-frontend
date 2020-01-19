import React, { Component } from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course/create-course';

export default class availableCourses extends Component {
    state = {
        items: [
            {id: 1, name: 'Course1', comment: 'Comment for course 1'},
            {id: 2, name: 'Course2', comment: 'Comment for course 2'},
            {id: 3, name: 'Course3', comment: 'Comment for course 3'}
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <div>
                <h1>Доступні курси</h1>
                <CourseList items={ items } />
                <CreateCourse />
            </div>)
    }
}
