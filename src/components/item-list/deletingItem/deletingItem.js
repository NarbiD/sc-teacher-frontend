import React from 'react';

import ButtonsGroup from '../../buttons-group/buttons-group';

const DeletingItem = ({ item }) => {
    const { id, label, startDate, endDate } = item;
       return (
        <span className="course-list-item"> 
            <span>Ви впевнені, що бажаєте видалити курс "{label}"?</span>       
            <div className="duration">({startDate} - {endDate})</div>
            <ButtonsGroup deleteLink={`/courses/${id}/delete`}
                          cancelLink="/courses/" />
        </span>
    );
};

export default DeletingItem;