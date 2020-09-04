import React from 'react';
import ItemList from '../../item-list/item-list';
import CreateButton from '../../create-button/create-button';

const Content = ({ courseId, items }) => {

        const baseLink=`/courses/${courseId}/`;

        return (<div className="content">
            <ItemList items={items}
                onRemove={()=>{}}
                buttons={{ delete:true, edit:true }}
                baseLink={`${baseLink}tasks/`} /> 
            <CreateButton label="Додати запис"
                link={`${baseLink}tasks/add`} />
            </div>);
}

export default Content;