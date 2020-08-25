import React from 'react';

import './secondary-header.css'
import BackButton from '../../buttons/back-button';

const SecondaryHeader = ({ course_id, title, student_name }) => {
    return <div className="dialog-header mb-1 d-flex justify-content-between">
                <BackButton link={`/courses/${course_id}`} />
                <span className="secondary-header">{`${title} | ${student_name}`}</span>
            </div>
}

export default SecondaryHeader;
