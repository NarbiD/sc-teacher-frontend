import React from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';

const AvailableCourses = ({ courses, onRemove, onEdit }) => {
    const buttons = {
        delete: true,
        edit: true
    }
    return (
        <div className="container">
            <PageTitle text="Доступні курси" />
            <ItemList items={ courses } 
                        onRemove={ onRemove }
                        buttons={buttons}
                        onEdit={ onEdit } 
                        baseLink={"/courses/"} />
            <CreateButton label="Створити курс"
                        link="/courses/add"/>
        </div>
    );
}

export default AvailableCourses;
