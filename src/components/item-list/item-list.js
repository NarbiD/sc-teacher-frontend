import React from 'react';

import './item-list.css'

import Item from './item/item'
import DeletingItem from './deletingItem/deletingItem';

import './item-list.css'

const ItemList = ({ items, onRemove }) => {
    const list = items.map((item) => {
        const { id, deleting } = item;
        let itemComponent = deleting ?
             (<DeletingItem item={item} onRemove={()=>onRemove(id)} />) : 
             (<Item item={item} />)
        return (
            <li key={id} className="list-group-item">
                {itemComponent}
            </li>
        );
    });
    return (<ul className="course-list list-group">{ list }</ul>)
}

export default ItemList;