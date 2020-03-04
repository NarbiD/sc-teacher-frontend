import React from 'react';

import { Link } from 'react-router-dom'

import './create-course-button.css'

const CreateCourseButton = () => {
    return <Link to="/create-course/"
                className="btn btn-outline-primary float-right create-course-button">
                    <span className="fa fa-plus"></span>
                    <span> Створити курс</span>
            </Link>
}

export default CreateCourseButton;
