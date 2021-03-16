import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavBar.css";
import Logo from '../../assets/briefcase.svg'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="nav-brand-container">
                <div className="nav-logo-container">
                    <img src={Logo} alt="logo" height="40" width="auto"></img>
                    </div>
                <div className="nav-brand-name">
                    <Navbar.Brand href="/">Share Office</Navbar.Brand>
                    <div>Business slogan here</div>
                </div>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                    <a href="/" id="nav-register">Register</a>
                    <a href="/" id="nav-login">Login</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;