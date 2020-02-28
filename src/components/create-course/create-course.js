import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'

const CreateCourse = ({ onCreate }) => {
    return <CourseFormGroup onSub={(item)=>onCreate(item)} />
}

export default CreateCourse;
