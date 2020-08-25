import React from 'react'
import MenuButton from '../buttons/menu-button';

const FilterPanel = ({ filters }) => {
    let filterButtons = [];
    for (const [key, value] of Object.entries(filters)) {
        filterButtons.push(<MenuButton label={key} onClick={value} />)
      }
    return <div className="course-filter btn-group mb-1" role="toolbar">
        {filterButtons}
    </div>
}

export default FilterPanel;