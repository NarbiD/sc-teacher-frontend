import React, { Component } from 'react'

const CourseInputForm = ({ label, placeholder="", onChange}) => {

    return 
        <input type="text"
            className="form-control"
            name="label"
            value={label}
            onChange={onChange}
            placeholder={placeholder} />
}

export default CourseInputForm;