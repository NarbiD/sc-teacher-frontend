import React, { Component } from 'react';
import CourseList from './course-list/course-list';
import CreateCourse from './create-course/create-course';
import Title from './title/title';

export default class availableCourses extends Component {
    state = {
        items: [
            {id: 1, label: 'Course1', comment: 'Comment for course 1'},
            {id: 2, label: 'Course2', comment: 'Comment for course 2'},
            {id: 3, label: 'Course3', comment: 'Comment for course 3'}
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <div>
                <Title />
                <CourseList items={ items } />
                <CreateCourse />
            </div>)
    }
}
