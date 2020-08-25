import React from 'react';

import './buttons.css';

const SendButton = ({ onSubmit }) => {
    return (
        <button type="submit"
            className="btn btn-outline-info send-btn btn-icon">
            <span className="fa fa-paper-plane mt-1"></span>
        </button>);
}

export default SendButton;