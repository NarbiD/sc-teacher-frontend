import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const BackButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-secondary btn-sm btn-icon">
            <span className="fa fa-arrow-left"></span>
        </Link>
    );
}

export default BackButton;