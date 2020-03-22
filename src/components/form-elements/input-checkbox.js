import React from 'react'

const InputFormCheckbox = ({ label, name, active, onChange }) => {
    return (
        <label className="form-check-label">
        <input type="checkbox"
            className="form-control"
            name={name}
            value={active}
            onChange={onChange} />
        <span>{ label }</span>
        </label>
    );
};

export default InputFormCheckbox;
