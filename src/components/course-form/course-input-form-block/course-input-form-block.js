import React from 'react'
import CourseInputForm from '../course-input-form/course-input-form'

const CourseInputFromBlock = ({ label, comment }) => {
    return (
    <div className="form-group">
        <label className="input-form-label">{label}</label>
        <CourseInputForm />
        <small className="form-text text-muted">{comment}</small>
    </div>
    );
};

export default CourseInputFromBlock;