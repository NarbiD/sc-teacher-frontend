import React from 'react';

import './buttons.css';

const MenuButton = ({ label, onClick }) => {
    return (
        <button
            className="btn btn-secondary btn-group btn-sm menu-btn text-center"
            role="group"
            type="button"
            onClick={onClick}>
            <span>{label}</span>
        </button>);
}

export default MenuButton;