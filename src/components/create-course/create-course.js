import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'
import Title from '../create-course/title/title';

const CreateCourse = ({ onCreate }) => {
    return <div  className="container">
                <Title />
                <CourseFormGroup onSub={(item)=>onCreate(item)} />
           </div>
}

export default CreateCourse;
