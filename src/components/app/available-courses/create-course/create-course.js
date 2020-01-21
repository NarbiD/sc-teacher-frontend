import React from 'react';

import './create-course.css'

const CreateCourse = () => {
    return <button type="button"
                 className="btn btn-outline-primary float-right create-course-button">
                     <span className="fa fa-plus"></span>
                     <span> Створити курс</span>
            </button>
}

export default CreateCourse;
