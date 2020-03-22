import React from 'react';
import PageTitle from '../page-title/page-title';

const CoursePage = ({ label }) => {
    return <div className="course-name container">
                <PageTitle text={label} />
           </div>
}

export default CoursePage;