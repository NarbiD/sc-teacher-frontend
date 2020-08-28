import React from 'react'
import InputForm from './input-form';

const InputFormRow = ({ label, type, comment, value, onChange, name, placeholder }) => {
    return (
    <div className="form-group">
        <label className="input-form-label">{label}</label>
        <InputForm value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}/>
        <small className="form-text text-muted">{comment}</small>
    </div>
    );
};

export default InputFormRow;