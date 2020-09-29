import React, { Component, Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

//this is the order each component will show on the home/main page.
class Home extends Component {
  // https://medium.com/javascript-in-plain-english/creating-a-hash-anchor-link-effect-with-react-router-a63dcb1a9b0e
  componentDidMount() {
    window.scroll(0, 0)
    console.log(this.props.location);
}
  render() {
    return (
      // pull in each component
      <Fragment>
        <Navigation component={Home} />
        <Banner />
        <About />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
