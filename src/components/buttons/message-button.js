import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const MessageButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-info btn-sm btn-icon">
            <span className="fa fa-envelope-o"></span>
        </Link>);
}

export default MessageButton;