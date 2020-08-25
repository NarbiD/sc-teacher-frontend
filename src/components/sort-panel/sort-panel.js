import React from 'react';

import './sort-panel.css';

const SortPanel = () => {
    return (
        <div className="sort-panel d-flex">
            <div className="sort-panel-text">Сортувати за</div>
            <select className="form-control form-control-sm sort-panel-select">
                <option selected>Успішністю</option>
                <option>Прогресом</option>
                <option>Абеткою</option>
            </select>
        </div>

    );
}
export default SortPanel;