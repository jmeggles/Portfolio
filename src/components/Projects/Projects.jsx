import React, { Component, Fragment } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap"; //import all contexts
import GoogleBooks from "../../assets/images/google-books.png";
import Budget from "../../assets/images/budget-tracker.png";
import Heroes from "../../assets/images/house-heroes.png";
import "./style.css";

//react-bootstrap card starter
class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="projectContainer">
          <h1 className="sectionTitle" id="projects">
            PROJECTS
          </h1>
          <Row>
            <Col md={4} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src={GoogleBooks}
                />
                <Card.Body>
                  <Card.Title>Google Books</Card.Title>
                  <Card.Text>
                    Search, save, view, and buy your favorite books on Google
                    Play store.
                  </Card.Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jmeggles/Google_Books"
                  >
                    <Button variant="primary" className="m-2">
                      Code
                    </Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://googlebooks-mern.herokuapp.com/"
                  >
                    <Button variant="primary" className="m-2">
                      Live
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src={Budget}
                />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                    Track your budget with offline capabilities. Great when
                    traveling!
                  </Card.Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jmeggles/Budget_Tracker"
                  >
                    <Button className="m-2">Code</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://budget-tracker-for-you.herokuapp.com/ "
                  >
                    <Button className="m-2">Live</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  className="projectCardImage"
                  variant="top"
                  src={Heroes}
                />
                <Card.Body>
                  <Card.Title>House Our Heroes</Card.Title>
                  <Card.Text>
                    Informational site about denied housing due to nature of
                    jobs during the pandemic.
                  </Card.Text>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jmeggles/House-Our-Heroes"
                  >
                    <Button className="m-2">Code</Button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://house-our-heroes.herokuapp.com/ "
                  >
                    <Button>Live</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Projects;