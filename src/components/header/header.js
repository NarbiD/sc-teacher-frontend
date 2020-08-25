import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './header.css';

const Header = () => {


  return (
      <Navbar className="navbar" bg="dark" expand="lg">
            <Navbar.Brand className="nav-link brand mb-1" href="/">
              <b className="link-text">Студентоцентрований онлайн аудиторіум</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="nav-link" href="/courses">
                  <span className="link-text navbar-right">Доступні курси</span>
                </Nav.Link>
                <Nav.Link className="nav-link" href="/signin">
                  <span className="link-text navbar-right">|</span>
                </Nav.Link>
                <Nav.Link className="nav-link float-right" href="/signup">
                  <span className="link-text navbar-right">Заславський В.А.</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;