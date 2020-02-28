import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'

const EditCourse = ({ courseItem, onSubmit }) => {
    return <CourseFormGroup 
                    onSubmit={ (item)=>onCreate(item) }
                    formState={ courseItem } />
}

export default EditCourse;
