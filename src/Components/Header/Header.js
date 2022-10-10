import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link> */}

      <Navbar className="nav" expand="lg">
        <Container>
          <Navbar.Brand className="nav_title" href="#home">
            QuizQuark
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              {/* <NavDropdown>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
