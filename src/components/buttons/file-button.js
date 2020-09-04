import React from 'react';

import './buttons.css';

const FileButton = () => {
    return (
        <button
            className="btn btn-outline-light btn-sm btn-icon attachment">
                <span className="fas fa-paperclip"/>
        </button>
    );
}

export default FileButton;