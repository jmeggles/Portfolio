import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mypic from "../../assets/images/profile-pic.jpg";
import "./style.css";

// stateful since info will be updated often
const About = () => {
  return (
    <Fragment>
      <Container className="aboutContainer">
        <h1 className="sectionTitle">ABOUT ME</h1>
        <Row>
          <Col>
            <img
              className="aboutImage"
              src={Mypic}
              alt="Profile pic of Jody Eggleston"
            />
            <div>
              <p className="aboutText col-6">
                Full stack web developer with extensive experience in logistics
                supervision (18 years), and vast knowledge in nutrition, health
                & fitness, and criminal justice. I'm highly motivated and
                energetic, work well under stressful situations and in a
                fast-paced setting. Maintains excellent research, time
                management and problem assessment plus resolution skills. I have
                a new passion for coding and love learning both frontend and
                backend of web development.
              </p>
              <p className="aboutText col-6">
                Contact me. Lets start a project!
              </p>
              <a target="_blank" rel="noopener noreferrer" href={`mailto:jmeggles@gmail.com`}><i className="fas fa-envelope fa-icon"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jody-eggleston"><i className="fab fa-linkedin-in fa-icon"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jmeggles"><i className="fab fa-github fa-icon"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1fVtFGpuRR1aFmVOI-IFFB2vVIiAVNRa9tTKOaSPOG4o/edit?usp=sharing"><i className="fas fa-file fa-icon"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
