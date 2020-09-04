import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const DeleteButton = ({ link, onRemove }) => {
    return (
        <Link to={link}
            className="btn btn-outline-danger btn-sm btn-icon"
            onClick={ onRemove }>
                <span className="far fa-trash-alt" />
        </Link>
    );
}

export default DeleteButton;