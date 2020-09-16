import React, { Component, Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

//this is the order each component will show on the home/main page.
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
