import React from 'react';

import ItemList from '../../item-list/item-list';

const Menu = ({ courseId }) => {
    const menu = [{id:"tasks", label:'Завдання'},
                {id:"mailing", label:"Розсилки"},
                {id:"content", label:"Матеріали"},
                {id:"teachers", label:"Додаткові викладачі"}];
        return <ItemList items={menu} baseLink={`/courses/${courseId}/`} />
}

export default Menu;