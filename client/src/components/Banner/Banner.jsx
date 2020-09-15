import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

// stateless since this info will not likely change
const Banner = () => {
  return (
    <Fragment>
      <Container>
        <h1>Jody Eggleston</h1>
        <h4>Full Stack Web Developer</h4>
      </Container>
    </Fragment>
  );
};

export default Banner;
