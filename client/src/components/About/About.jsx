import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mypic from "../../assets/images/profile-pic.jpg";

// stateful since info will be updated often
const About = () => {
  return (
    <Fragment>
      <Container>
        <h1>ABOUT ME</h1>
        <Row>
          <Col>
            <img src={Mypic} alt="Profile pic of Jody Eggleston" />
            <p>
              Full stack web developer with extensive knowledge in logistics
              supervision (18 years), experience in nutrition, health & fitness,
              and criminal justice. I love learning both frontend and backend
              and have a new passion for coding!
              <br />
              Contact me. Lets start a project!
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
