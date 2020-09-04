import React from 'react';
import { Link } from 'react-router-dom';

import './buttons.css';

const ReviewButton = ({ link }) => {
    return (
        <Link to={link}
            className="btn btn-outline-success btn-sm btn-label">
                <span className="far fa-file-alt"> Відгук викладача</span>
        </Link>
    );
}

export default ReviewButton;