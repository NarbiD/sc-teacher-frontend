import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'
import PageTitle from '../page-title/page-title';

const EditCourse = ({ course, onEdit }) => {
    return <div className="container">
                <PageTitle text={`Редагування курсу "${course.label}"`} />
                <CourseFormGroup 
                    onSubmit={ (item)=>onEdit(item) }
                    formState={ course } />
           </div>
}

export default EditCourse;
