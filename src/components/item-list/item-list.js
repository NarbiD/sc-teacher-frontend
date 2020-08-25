import React from 'react';

import './item-list.css'

import Item from './item/item'
import DeletingItem from './deletingItem/deletingItem';

import './item-list.css'
import ButtonsGroup from '../buttons-group/buttons-group';
import VerticalButtonGroup from '../vertical-button-group/vertical-button-group';

const ItemList = ({ items, onRemove, buttons, baseLink }) => {
    const list = items.map((item) => {
        const { id, deleting } = item;
        const link = `${baseLink}${id}`;
        let itemComponent, buttonsGroup;
        if (deleting) {
            buttonsGroup = <ButtonsGroup deleteLink={`${link}/delete`}
                                    cancelLink={baseLink} />
            itemComponent = (<DeletingItem item={item} buttons={buttonsGroup} onRemove={()=>onRemove(id)} />)
        } else if (buttons){
            if (buttons.vertical){
                buttonsGroup = <VerticalButtonGroup teacherLink={buttons.teacher} reviewLink={buttons.review} />
            } else {
                buttonsGroup = <ButtonsGroup deleteLink={ buttons.delete ? `${link}/predelete` : undefined }
                          editLink={ buttons.edit ? `${link}/edit` : undefined }
                          messageLink={ buttons.message ? `${link}/message` : undefined } />
            }
            itemComponent = (<Item item={item} buttons={buttonsGroup} link={link} />)
        } else {
            itemComponent = (<Item item={item} link={link} />)
        }
        return (
            <li key={id} className="list-group-item container">
                {itemComponent}
            </li>
        );
    });
    return (<ul className="course-list list-group">{ list }</ul>)
}

export default ItemList;