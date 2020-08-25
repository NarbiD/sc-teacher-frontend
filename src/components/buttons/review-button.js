import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const ReviewButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-success btn-sm btn-label">
                <i className="far fa-file-alt"> Відгук викладача</i>
        </Link>
    );
}

export default ReviewButton;