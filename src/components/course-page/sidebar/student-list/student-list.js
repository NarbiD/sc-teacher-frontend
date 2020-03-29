import React from 'react';

import ItemList from '../../../item-list/item-list';
import CreateButton from '../../../create-button/create-button';

import './student-list.css'

const StudentList = ({ courseId, students }) => {
    const buttons = {
        message:true
    }
    return <div className="student-list">
                <ItemList items={students}
                        onRemove={()=>{}} 
                        buttons={buttons}
                        baseLink={`/courses/${courseId}/students/`} /> 
                <CreateButton label="Додати студента"
                        link={`/courses/${courseId}/students/add`} />
           </div>
}
export default StudentList;