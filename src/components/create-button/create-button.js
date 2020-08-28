import React from 'react';

import { Link } from 'react-router-dom'

import './create-button.css'

const CreateButton = ({ label, link }) => {
    return <Link to={link}
                className="btn btn-outline-primary float-right create-button">
                    <span className="fa fa-plus"/>
                    <span> {label} </span>
            </Link>
}

export default CreateButton;