import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const MessageButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-info btn-sm btn-icon">
                <i className="far fa-envelope"></i>
        </Link>);
}

export default MessageButton;