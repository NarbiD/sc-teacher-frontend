import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const ToCoursesButton = () => {
    return (
        <button
              className="btn btn-success btn-sm btn-label">
            <span className="fas fa-sign-in-alt"> </span>
            <b> Особистий кабінет</b>
        </button>
    );
}

export default ToCoursesButton;