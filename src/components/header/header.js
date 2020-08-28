import React, {Component} from 'react';
import {Cookies} from 'react-cookie';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './header.css';
import SignInForm from "../sign-in-form/sign-in-form";
import ToCoursesButton from "../buttons/to-courses-button";
import SignOutButton from "../buttons/sign-out-button";
import ApiService from "../api-service/api-service";

export default class Header extends Component{
    setTab = (val = false) => {
        if (val) {
            this.setState({ tab:
                    <div className="d-flex">
                        <Nav.Link className="nav-link" href="/courses">
                            <span className="link-text navbar-right"><ToCoursesButton /></span>
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="/signout">
                            <span className="link-text navbar-right"><SignOutButton /></span>
                        </Nav.Link>
                    </div>
            })} else {
            this.setState({
                tab:<div className="sign-in-navbar">
                    <SignInForm hideForm={this.setTab}/>
                </div>
            })
        }
    }

    state = {
        tab: null
    }

    componentDidMount() {
        console.log(Date.now() + " " + ApiService.getCookie(ApiService._apiToken));
        let token = ApiService.getCookie(ApiService._apiToken);
        this.setTab(token!==undefined && token!=="");
    }

    render() {
        return (
            <Navbar className="navbar" bg="dark" expand="lg">
                <Navbar.Brand className="nav-link brand mb-1" href="/">
                    <b className="link-text">Студентоцентрований онлайн аудиторіум</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {this.state.tab}
                    </Nav>


                </Navbar.Collapse>
            </Navbar>
        )
    }
};

