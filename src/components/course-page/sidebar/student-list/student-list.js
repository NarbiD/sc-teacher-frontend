import React from 'react';

import ItemList from '../../../item-list/item-list';

import './student-list.css'

const StudentList = ({ courseId, students }) => {
    return <div className="student-list overflow-auto">
                <ItemList items={students}
                        onRemove={()=>{}} 
                        buttons={{ message:true }}
                        baseLink={`/courses/${courseId}/students/`} /> 
           </div>
}
export default StudentList;