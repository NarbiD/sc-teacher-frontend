import React from 'react';

import './vertical-button-group.css'
import ReviewButton from '../buttons/review-button';
import TeacherButton from '../buttons/teacher-button';

const VerticalButtonGroup = ({ reviewLink, teacherLink }) => {
    let buttons = [];
    if(reviewLink) {
        buttons.push(<ReviewButton key={reviewLink} link={reviewLink} />);
    }
    if(teacherLink) {
        buttons.push(<TeacherButton key={teacherLink} link={teacherLink} />);
    }
    return <div className="vertical-button-group float-right">
                {buttons}
           </div>
}

export default VerticalButtonGroup;