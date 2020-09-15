import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import BannerJumbo from "../../assets/images/laptopBanner.jpg";
import "./style.css";


// stateless since this info will not likely change
const Banner = () => {
  return (
    <Fragment>
      <Container className="bannerContainer overlay">
        <div>
        <img className="bannerImage" src={BannerJumbo} alt="laptop on a table" />
        <h1 className="bannerNameTitle">Jody Eggleston</h1>
        <h4>Full Stack Web Developer</h4>
        </div>
      </Container>
    </Fragment>
  );
};

export default Banner;
