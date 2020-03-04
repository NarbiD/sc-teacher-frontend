import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'

const EditCourse = ({ courseItem, onEdit }) => {
    return <CourseFormGroup 
                    onSubmit={ (item)=>onEdit(item) }
                    formState={ courseItem } />
}

export default EditCourse;
