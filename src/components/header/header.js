import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/"
            class="navbar-brand">
          Бот-викладач
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/courses/"
                className="nav-link">
            Доступні курси
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-in"
                className="nav-link">
            Вхід
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up"
                class="nav-link">
            Реєстрація
          </Link>
        </li>
      </ul>
      </div>
      </nav>
  );
};

export default Header;