import React from 'react';

import './item-list.css'

import Item from './item/item'
import DeletingItem from './deletingItem/deletingItem';

import './item-list.css'
import ButtonsGroup from '../buttons-group/buttons-group';

const ItemList = ({ items, onRemove, buttons, baseLink }) => {
    console.log(items);
    const list = items.map((item) => {
        const { id, deleting } = item;
        const link = `${baseLink}${id}`;
        let itemComponent, buttonsGroup;
        if (deleting) {
            buttonsGroup = <ButtonsGroup deleteLink={`${link}/delete`}
                                    cancelLink={baseLink} />
            itemComponent = (<DeletingItem item={item} buttons={buttonsGroup} onRemove={()=>onRemove(id)} />)
        } else if (buttons){
            buttonsGroup = <ButtonsGroup deleteLink={ buttons.delete ? `${link}/predelete` : undefined }
                          editLink={ buttons.edit ? `${link}/edit` : undefined }
                          messageLink={ buttons.message ? `${link}/message` : undefined } />
            itemComponent = (<Item item={item} buttons={buttonsGroup} link={link} />)
        } else {
            itemComponent = (<Item item={item} link={link} />)
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