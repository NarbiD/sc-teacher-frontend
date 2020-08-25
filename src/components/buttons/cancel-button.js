import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const CancelButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-secondary btn-sm btn-icon">
                <i className="fas fa-undo"></i>
        </Link>
    );
}

export default CancelButton;