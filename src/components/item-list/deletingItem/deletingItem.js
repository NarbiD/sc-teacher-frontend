import React from 'react';

import DeleteButton from '../../buttons/delete-button';
import CancelButton from '../../buttons/cancel-button';

const DeletingItem = ({ item, onRemove }) => {
    const { label, startDate, endDate } = item;
       return (
        <span className="course-list-item"> 
            <span>Ви впевнені, що бажаєте видалити курс "{label}"?</span>       
            <div className="duration">({startDate} - {endDate})</div>
            <DeleteButton link="/courses/"
                        onRemove={ onRemove } />
            <CancelButton link="/courses/" />
        </span>
    );
};

export default DeletingItem;