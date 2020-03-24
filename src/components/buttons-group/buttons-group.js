import React from 'react';

import './buttons-group.css'

const ButtonsGroup = ({ buttons }) => {
    const buttonsGroup = buttons.map((button) => {
        return <span className="float-right">
                {button}
               </span>
    });
    return <div className="buttons-group">
                {buttonsGroup}
           </div>
}

export default ButtonsGroup;