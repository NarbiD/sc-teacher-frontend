import React from 'react';

import './buttons-group.css'
import EditButton from '../buttons/edit-button';
import DeleteButton from '../buttons/delete-button';
import CancelButton from '../buttons/cancel-button';
import MessageButton from '../buttons/message-button';

const ButtonsGroup = ({ deleteLink, editLink, messageLink, cancelLink }) => {
    let buttons = [];
    if(cancelLink) {
        buttons.push(<CancelButton key={cancelLink} link={cancelLink} />);
    }
    if(editLink) {
        buttons.push(<EditButton key={editLink} link={editLink} />);
    }
    if(messageLink) {
        buttons.push(<MessageButton key={messageLink} link={messageLink} />);
    }
    if (deleteLink) {
        buttons.push((<DeleteButton key={deleteLink} link={deleteLink} />));
    }
    return <div className="buttons-group float-right">
                {buttons}
           </div>
}

export default ButtonsGroup;