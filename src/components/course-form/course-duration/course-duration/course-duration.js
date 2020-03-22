import React from 'react'

import './course-duration.css'
import DateInputForm from '../../../form-elements/date-input-form'

const CourseDuration = ({ label, comment, names, startDate, endDate, onChange}) => {
    return (
        <div className="course-duration form-group">
            <label className="input-form-label">{label}</label>
            <div className="d-flex">
                <DateInputForm 
                    name={names[0]}
                    value={startDate}
                    onChange={onChange} />
                <span> _ </span>
                <DateInputForm 
                    name={names[1]}
                    value={endDate}
                    onChange={onChange} />
            </div>
            <small className="form-text text-muted">{comment}</small>
        </div>
    );
}

export default CourseDuration;