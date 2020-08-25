import React from 'react';
import { Link } from 'react-router-dom';

import './mark.css';

const Mark = ({ link, text }) => {
    return (
        <Link to={link} title={text.title}
            className="btn btn-success btn-sm mark">
            <span className="mark-text">{text.text}</span>
        </Link>);
}

export default Mark;