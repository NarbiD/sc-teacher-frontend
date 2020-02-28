import React from 'react'
import DateInputFrom from '../date-input-form/date-input-form'

import './course-duration.css'
const CourseDuration = () => {
    return <div>
        <DateInputFrom 
            label="Початок курсу"
            />
        <DateInputFrom
            label="Кінець курсу"
            />
        </div>
}

export default CourseDuration;