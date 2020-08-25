import React from 'react';

import '../item/item.css'

const DeletingItem = ({ item, buttons }) => {
    const { label, startDate, endDate } = item;
       return (
        <span className="list-item row"> 
                <div className="col-lg-9">
                    <span>Ви впевнені, що бажаєте видалити курс "{label}"?</span>       
                    <div className="duration">({startDate} - {endDate})</div>
                </div>
                <div className="col-lg-3">{buttons}</div>
        </span>
    );
};

export default DeletingItem;