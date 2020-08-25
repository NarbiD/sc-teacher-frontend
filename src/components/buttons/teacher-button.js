import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const TeacherButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-info btn-sm btn-label">
                <span className="far fa-envelope"> Написати викладачу</span>
        </Link>
    );
}

export default TeacherButton;