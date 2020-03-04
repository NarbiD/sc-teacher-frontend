import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {

  const LinkInHeader = ({ link, text }) =>
             <li className="nav-item">
                <Link to={ link }
                      className="nav-link">
                  { text }
                </Link>
             </li>

  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
          Бот-викладач
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <LinkInHeader link="/courses/"
                        text="Доступні курси" />
          <LinkInHeader link="/sign-in"
                        text="Вхід" />
          <LinkInHeader link="/sign-up"
                        text="Реєстрація" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;