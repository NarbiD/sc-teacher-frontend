import React from 'react';

import './item-list.css'

import Item from './item/item'
import DeletingItem from './deletingItem/deletingItem';

import './item-list.css'
import ButtonsGroup from '../buttons-group/buttons-group';

const ItemList = ({ items, onRemove, buttons, baseLink }) => {
    const list = items.map((item) => {
        const { id, deleting } = item;
        let itemComponent, buttonsGroup;
        if (deleting) {
            buttonsGroup = <ButtonsGroup deleteLink={`${baseLink}${id}/delete`}
                                    cancelLink={baseLink} />
            itemComponent = (<DeletingItem item={item} buttons={buttonsGroup} onRemove={()=>onRemove(id)} />)
        } else {
            buttonsGroup = <ButtonsGroup deleteLink={ buttons.delete ? `${baseLink}${id}/predelete` : undefined }
                          editLink={ buttons.edit ? `${baseLink}${id}/edit` : undefined }
                          messageLink={ buttons.message ? `${baseLink}${id}/message` : undefined } />
            const link = `${baseLink}${id}/`;
            itemComponent = (<Item item={item} buttons={buttonsGroup} link={link} />)
        }
        return (
            <li key={id} className="list-group-item">
                {itemComponent}
            </li>
        );
    });
    return (<ul className="course-list list-group">{ list }</ul>)
}

export default ItemList;