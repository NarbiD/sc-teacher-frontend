import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const DeleteButton = ({ link, onRemove }) => {
    return (
        <Link to={link}
            className="btn btn-outline-danger btn-sm btn-icon float-right"
            onClick={ onRemove }>
            <span className="fa fa-trash-o"></span>
        </Link>
    );
}

export default DeleteButton;