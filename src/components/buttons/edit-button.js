import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const EditButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-warning btn-sm btn-icon">
            <span className="fa fa-pencil-square-o"></span>
        </Link>);
}

export default EditButton;