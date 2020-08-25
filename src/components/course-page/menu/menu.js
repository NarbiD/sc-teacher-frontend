import React from 'react';

import MenuButton from '../../buttons/menu-button';

const Menu = ({ update }) => {

    const onClick = (state) => {
        update(state);
    }

    return (<div className="btn-group mb-1" role="toolbar">
                <MenuButton label="Завдання" onClick={()=>onClick('tasks')}  />
                <MenuButton label="Розсилки" onClick={()=>onClick('mailing')} />
                <MenuButton label="Матеріали" onClick={()=>onClick('materials')} />
                <MenuButton label="Викладачі" onClick={()=>onClick('teachers')} />
            </div>);
}

export default Menu;