import React from 'react'

const InputFormCheckbox = ({ label, name, value, onChange }) => {
    return (
        <label className="form-check-label">
        <input type="checkbox"
            className="form-control"
            name={name}
            value={value}
            onChange={onChange} />
        <span>{ label }</span>
        </label>
    );
};

export default InputFormCheckbox;
