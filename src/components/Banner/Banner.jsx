import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./style.css";

// stateless since this info will not likely change
const Banner = () => {
  return (
    <Fragment id="banner">
      {/* banner image */}
      <div className="bannerImage">
        {/* dark overlay */}
        <div className="overlay">
          <Container className="bannerContainer">
            <h1 className="bannerName" id="home">JODY EGGLESTON</h1>
            <h4 className="bannerTitle"> Full Stack Web Developer</h4>
            <div className="bannerIcons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:jmeggles@gmail.com`}
              >
                <i className="fas fa-envelope fa-icon"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jody-eggleston"
              >
                <i className="fab fa-linkedin-in fa-icon"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jmeggles"
              >
                <i className="fab fa-github fa-icon"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1fVtFGpuRR1aFmVOI-IFFB2vVIiAVNRa9tTKOaSPOG4o/edit?usp=sharing"
              >
                <i className="fas fa-file fa-icon"></i>
              </a>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
