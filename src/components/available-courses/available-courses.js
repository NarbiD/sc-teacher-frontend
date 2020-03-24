import React from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';

const AvailableCourses = ({ courses, onRemove, onEdit }) => {
    return (
        <div className="container">
            <PageTitle text="Доступні курси" />
            <ItemList items={ courses } 
                        onRemove={ onRemove }
                        onEdit={ onEdit } />
            <CreateButton label="Створити курс"
                        link="/courses/add"/>
        </div>
    );
}

export default AvailableCourses;
