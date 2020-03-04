import React from 'react'

import CourseFormGroup from '../course-form/course-input-from-group/course-form-group'
import PageTitle from '../page-title/page-title';

const CreateCourse = ({ onCreate }) => {
    return <div className="container">
                <PageTitle text="Створення нового курсу" />
                <CourseFormGroup onSubmit={(item)=>onCreate(item)} />
           </div>
}

export default CreateCourse;
