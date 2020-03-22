import React from 'react'

const InputForm = ({ value, placeholder="", onChange, type, name}) => {
    return (
        <input type={type}
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
    )
}

export default InputForm;