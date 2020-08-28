import React from 'react';

import './buttons.css';

const SignInButton = ({ onSubmit }) => {
    return (
        <button type="submit"
                className="btn btn-outline-success send-btn btn-icon">
            <i className="fas fa-sign-in-alt" />
        </button>);
}

export default SignInButton;