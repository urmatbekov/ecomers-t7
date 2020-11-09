import React, {Component} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class NavbarMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarMenu;