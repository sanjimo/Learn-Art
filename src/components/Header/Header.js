import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../utilities/images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="danger" expand="lg">
                <Container className="color-white">
                    <img
                        src={logo}
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Learn Art logo"
                    />
                    <Navbar.Brand className="text-white fs-4 ms-1 me-5 fw-bold">Learn Art</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto p-2">
                            <NavLink
                              to="/home"
                              className="me-2 ms-4 fs-5 text-white text-decoration-none"
                              activeStyle={{
                              fontWeight: "bold"
                              }}
                            >Home</NavLink>
                            <NavLink
                              to="/courses"
                              className="me-2 ms-2 fs-5 text-white text-decoration-none"
                              activeStyle={{
                                fontWeight: "bold"
                              }}
                            >Courses</NavLink>
                            <NavLink
                              to="/academics"
                              className="me-2 ms-2 fs-5 text-white text-decoration-none"
                              activeStyle={{
                                fontWeight: "bold"
                              }}
                            >Academics</NavLink>
                            <NavLink
                             to="/about"
                             className="me-2 ms-2 fs-5 text-white text-decoration-none"
                             activeStyle={{
                               fontWeight: "bold"
                             }}
                            >About Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;