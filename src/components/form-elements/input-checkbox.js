import React from 'react'

const InputFormCheckbox = ({ label, name, value, onChange }) => {
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" name={name} value={value} onChange={onChange} />
            <label className="form-check-label">{ label }</label>
        </div>
    );
};

export default InputFormCheckbox;
