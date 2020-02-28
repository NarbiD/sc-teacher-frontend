import React from 'react'

const CourseInputFromCheckbox = ({ label }) => {
    return (
        <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                <span> {label}</span>
            </label>
        </div>
    );
};

export default CourseInputFromCheckbox;
