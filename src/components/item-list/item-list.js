import React from 'react';

import './item-list.css'

import Item from './item/item'

const ItemList = ({ items, onRemove }) => {
    const list = items.map((item) => {
        const { id } = item;
        return (
            <li key={id} className="list-group-item">
                <Item items={item}
                                onRemove={()=>onRemove(id)} />
            </li>
        )
    });
    return (<ul className="course-list list-group">{ list }</ul>)
}

export default ItemList;