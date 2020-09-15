import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap"; // import Nav, Navbar if used below
import "./style.css";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand id="homePageName" href="#home">Jody Eggleston</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
