import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'
import PageTitle from '../page-title/page-title';

const EditCourse = ({ courseItem, onEdit }) => {
    return <div className="container">
                <PageTitle text={`Редагування курсу "${courseItem.label}"`} />
                <CourseFormGroup 
                    onSubmit={ (item)=>onEdit(item) }
                    formState={ courseItem } />
           </div>
    
    
    
}

export default EditCourse;
