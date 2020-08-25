import React from 'react';

import ItemList from '../../../item-list/item-list';

import './student-list.css'

const StudentList = ({ courseId, students }) => {
    const buttons = {
        message:true
    }
    return <div className="student-list overflow-auto">
                <ItemList items={students}
                        onRemove={()=>{}} 
                        buttons={buttons}
                        baseLink={`/courses/${courseId}/students/`} /> 
           </div>
}
export default StudentList;