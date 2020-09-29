import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap"; // import Nav, Navbar if used below
import "./style.css";


//stateful (container or smart) component that keeps track of changing data. use for info that constantly changes such as high scores or a user's fav song. also use for forms that take text input. using stateful components, could lead to less work and cleaner codebase.
// https://designrevision.com/docs/shards-react/component/navbar
class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      navName: "navName",
      navLink: "navLink",
      navBg: "navBg",
  }
}
onScroll = () => {
  if (window.scrollY > 200) {
      this.setState({
          navName: "navNameScroll",
          navLink: "navLinkScroll",
          navBg: "navBgScroll",
      })
  } else if (window.scrollY < 200) {
      this.setState({
          navName: "navName",
          navLink: "navLink",
          navBg: "navBg",
        })
    }
}  
componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  //render from a stateful component
  render() {
    return (
      <Fragment>
        <Navbar className={this.state.navBg} fixed="top" expand="md">
          <Navbar.Brand> <Nav.Link className={this.state.navName} href="#home">
            Jody Eggleston</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ml-auto moves nav links to the right */}
            <Nav className="ml-auto">
              <Nav.Link className={this.state.navLink} href="#home">HOME</Nav.Link>
              <Nav.Link className={this.state.navLink} href="#about">ABOUT</Nav.Link>
              <Nav.Link className={this.state.navLink} href="#projects">PROJECTS</Nav.Link>
              <Nav.Link className={this.state.navLink} href="#techs">TECHS</Nav.Link>
              <Nav.Link className={this.state.navLink} href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
