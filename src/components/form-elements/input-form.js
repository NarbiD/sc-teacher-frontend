import React from 'react'

const InputForm = ({ value, placeholder="", onChange, type, name}) => {
    return (
        <input type={type}
            className="form-control form-control-sm"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
    )
}

export default InputForm;