import React from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';
import ApiService from "../api-service/api-service";

const AvailableCourses = ({ courses, onRemove, onEdit }) => {
    const buttons = {
        delete: true,
        edit: true
    }
    // let newc = ApiService.getAllCourses();
    // console.log(newc);
    // newc = newc.map(n=>n.label=n.title);
    // console.log(newc);
    // newc = { ...courses, newc };
    // console.log(newc);

    return (
        <div className="container">
            <PageTitle text="Доступні курси" />
            <ItemList items={ newc }
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
