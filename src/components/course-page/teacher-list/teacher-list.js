import React from 'react';

import ButtonsGroup from '../../buttons-group/buttons-group';
import TeacherItem from '../teacher-item/teacher-item';

const TeacherList = ({ items, onRemove, buttons, baseLink }) => {
    const list = items.map((item) => {
        const { id, deleting } = item;
        let itemComponent, buttonsGroup;
        if (buttons){
            console.log(buttons);
            buttonsGroup = <ButtonsGroup deleteLink={ buttons.delete ? `${baseLink}${id}/predelete` : undefined }
                          editLink={ buttons.edit ? `${baseLink}${id}/edit` : undefined }
                          messageLink={ buttons.message ? `${baseLink}${id}/message` : undefined } />
                          console.log(buttonsGroup);
            itemComponent = (<TeacherItem item={item} buttons={buttonsGroup} />)
        } else {
            itemComponent = (<TeacherItem item={item} />)
        }
        return (
            <li key={id} className="list-group-item">
                {itemComponent}
            </li>
        );
    });
    return (<ul className="course-list list-group">{ list }</ul>)
}

export default TeacherList;