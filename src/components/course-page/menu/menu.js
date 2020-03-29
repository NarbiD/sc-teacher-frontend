import React from 'react';

import MenuButton from '../../buttons/menu-button';

const Menu = ({ courseId }) => {
    const baseLink=`/courses/${courseId}/`;
        return (<div className="btn-group mb-1" role="toolbar">
                <MenuButton label="Завдання" link={`${baseLink}tasks`} />
                <MenuButton label="Розсилки" link={`${baseLink}mailing`} />
                <MenuButton label="Матеріали" link={`${baseLink}materials`} />
                <MenuButton label="Викладачі" link={`${baseLink}teachers`} />
                </div>);
}

export default Menu;