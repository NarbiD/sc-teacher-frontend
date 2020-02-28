import React from 'react'

const DateInputForm = ({ label }) => {
    return <div>
        <label>{label}</label>
        <input className="form-control" type="date" />
    </div>
}

export default DateInputForm;