import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const MenuButton = ({ link, label }) => {
    return (
        <Link to={link}
            className="btn btn-secondary btn-group btn-sm menu-btn"
            role="group"
            type="button">
            <span>{label}</span>
        </Link>);
}

export default MenuButton;