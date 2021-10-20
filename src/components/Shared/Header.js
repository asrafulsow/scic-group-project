import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth()
    console.log(user)

    const activeStyle={
        fontWeight: "bold",
        color: "salmon",
        backgroundColor: "white",
        border: "1px solid blue",
        padding: "10px"
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <div className="container">
                    <Navbar.Brand className="fw-bold logo" href="/home">FitnessZone</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <ul className="nav-link">
                            <li><NavLink activeStyle ={activeStyle} to="/home">Home</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to ="/services">Services</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to="/about">About</NavLink></li>
                            <li><NavLink activeStyle ={activeStyle} to ="/contact">Contact Us</NavLink></li>
                            {
                                user.email ?<li><NavLink onClick={logout} activeStyle ={activeStyle} to ="/login">Logout</NavLink></li>:
                                <li><NavLink activeStyle ={activeStyle} to ="/login">Login</NavLink></li>
                            }
                            <span style={{color: 'white'}}>{user.displayName}</span>
                        </ul>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/* <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">FitnessZone</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Navbar.Toggle />
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </> */}
        </div>
    );
};

export default Header;