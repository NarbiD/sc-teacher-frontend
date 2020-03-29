import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './header.css';

const Header = () => {


  return (
      <Navbar className="navbar" bg="dark" expand="lg">
            <Navbar.Brand className="nav-link" href="/">
              <span className="link-text">Бот-викладач</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/courses/">
                  <span className="link-text">Доступні курси</span>
                </Nav.Link>
                <Nav.Link className="nav-link" href="/sign/in">
                  <span className="link-text">Вхід</span>
                </Nav.Link>
                <Nav.Link className="nav-link" href="/sign-up">
                  <span className="link-text">Реєстрація</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;