import React from 'react';

import './buttons.css';

const SignOutButton = () => {
    return (
        <button type="button"
                className="btn btn-warning btn-sm">
            <span className="fas fa-sign-out-alt" />
            <b> Вийти</b>
        </button>);
}

export default SignOutButton;