import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const EditButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-warning btn-sm btn-icon">
                <i className="far fa-edit"></i>
        </Link>);
}

export default EditButton;