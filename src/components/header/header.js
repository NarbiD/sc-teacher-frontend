import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Бот-викладач
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/courses/">Доступні курси</Link>
        </li>
        <li>
          <Link to="/sign-in">Вхід</Link>
        </li>
        <li>
          <Link to="/sign-up">Реєстрація</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;