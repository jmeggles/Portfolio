import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./style.css";

// stateless since this info will not likely change
const Banner = () => {
  return (
    <Fragment>
      {/* banner image */}
      <div className="bannerImage">
        {/* dark overlay */}
        <div className="overlay">
          <Container className="bannerContainer">
        
              
              <h1 className="bannerName">Jody Eggleston</h1>
              <h4 className="bannerTitle"> Full Stack Web Developer</h4>
    
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
