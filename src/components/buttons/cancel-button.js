import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const CancelButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-secondary btn-sm btn-icon">
                <span className="fas fa-undo"/>
        </Link>
    );
}

export default CancelButton;