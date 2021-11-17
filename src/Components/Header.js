import React, { Component } from 'react';
import { Form, FormControl, Nav, Navbar, Container, Button } from 'react-bootstrap';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import logo from './ak-logo.svg';

import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Work from "../Pages/Work";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education"
import Portfolio from "../Pages/Portfolio"

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                            src={logo}
                            height='60'
                            width='60'
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="ms-3" href="/">About Me</Nav.Link>
                            <Nav.Link className="ms-3" href="/skills">Skills</Nav.Link>
                            <Nav.Link className="ms-3" href="/edu">Education</Nav.Link>
                            <Nav.Link className="ms-3" href="/work">Work</Nav.Link>
                            <Nav.Link className="ms-3" href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="ms-3" href="/contacts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<About/>} />
                    <Route exact path="/skills" element={<Skills/>} />
                    <Route exact path="/edu" element={<Education/>} />
                    <Route exact path="/work" element={<Work/>} />
                    <Route exact path="/portfolio" element={<Portfolio/>} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                </Routes>
            </BrowserRouter>
            </>
        );
    }
}