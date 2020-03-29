import React from 'react';
import ItemList from '../../item-list/item-list';
import CreateButton from '../../create-button/create-button';

const Tasks = ({ courseId, items }) => {
    const baseLink=`/courses/${courseId}/`;
    const buttons1 = {
        delete:true,
        edit:true
    }
        return (<div className="content">
            <ItemList items={items}
                onRemove={()=>{}}
                buttons={buttons1}
                baseLink={`${baseLink}tasks/`} /> 
            <CreateButton label="Створити завдання"
                link={`${baseLink}tasks/add`} />
            </div>);
}

export default Tasks;