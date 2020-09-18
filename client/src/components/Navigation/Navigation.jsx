import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap"; // import Nav, Navbar if used below
import "./style.css";

//stateful (container or smart) component that keeps track of changing data. use for info that constantly changes such as high scores or a user's fav song. also use for forms that take text input. using stateful components, could lead to less work and cleaner codebase.
class Navigation extends Component {


  render() {
    return (
      <Fragment>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand id="navigationName" href="#home">
            Jody Eggleston
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ml-auto moves nav links to the right */}
            <Nav className="navigationLinks ml-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link  href="#about">ABOUT</Nav.Link>
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
