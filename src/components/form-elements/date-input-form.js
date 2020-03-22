import React from 'react'

const DateInputForm = ({ name, value, onChange }) => {
    return (
        <input type="date"
            className="form-control"
            name={name}
            value={value}
            onChange={onChange} />
    );
}

export default DateInputForm;