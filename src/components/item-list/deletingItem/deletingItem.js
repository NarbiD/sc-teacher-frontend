import React from 'react';

const DeletingItem = ({ item, buttons }) => {
    const { label, startDate, endDate } = item;
       return (
        <span className="list-item"> 
            <span>Ви впевнені, що бажаєте видалити курс "{label}"?</span>       
            <div className="duration">({startDate} - {endDate})</div>
            {buttons}
        </span>
    );
};

export default DeletingItem;