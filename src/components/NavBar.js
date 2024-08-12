import React from "react";
import { NavLink } from "react-router-dom";
import { HouseDoorFill, Justify } from "react-bootstrap-icons";
import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";

function NavBar() {
    return <>
        <Navbar className="navbar" expand='lg'>
            <Container fluid>
                <Navbar.Brand as={NavLink} to='/'><HouseDoorFill /></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar"><Justify /></Navbar.Toggle>
                <NavbarCollapse className="justify-content-end" id="basic-navbar">
                    <Nav variant="pills">
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/academics'>Academics</Nav.Link>
                        <Nav.Link as={NavLink} to='/admissions'>Admissions</Nav.Link>
                        <Nav.Link as={NavLink} to='/faculty'>Faculty</Nav.Link>
                        <Nav.Link as={NavLink} to='/students'>Students</Nav.Link>
                        <Nav.Link as={NavLink} to='/gallery'>Gallery</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;