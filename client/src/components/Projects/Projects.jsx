import React, { Component, Fragment } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap"; //import all contexts
import MERN from "../../assets/images/mern.jpg";
import Offline from "../../assets/images/offline.png"
import Info from "../../assets/images/info-icon.png"
import "./style.css";

//react-bootstrap card starter
class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Container className="projectContainer col-lg-6">
          <Row>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={MERN} />
                <Card.Body>
                  <Card.Title>Google Books</Card.Title>
                  <Card.Text>
                  Search, save, view, and buy your favorite books on Google Play store.
                  </Card.Text>
                  <a target="_blank" rel="noopener noreferrer" href="https://googlebooks-mern.herokuapp.com/"><Button variant="primary">Live View on Heroku</Button></a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={MERN} />
                <Card.Body>
                  <Card.Title>To-Do App</Card.Title>
                  <Card.Text>
                  Simple to-do application to keep daily activities in order.
                  </Card.Text>
                  <a target="_blank" rel="noopener noreferrer" href="https://todo-app-with-mern.herokuapp.com/  "><Button variant="primary">Live View on Heroku</Button></a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Offline} />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                  Track your budget with offline capabilities. Great when traveling!
                  </Card.Text>
                  <a target="_blank" rel="noopener noreferrer" href="https://budget-tracker-for-you.herokuapp.com/ "><Button variant="primary" >Live View on Heroku</Button></a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Info} />
                <Card.Body>
                  <Card.Title>House Our Heroes</Card.Title>
                  <Card.Text>
                    Informational site about healthcare workers and first responders being denied housing due to their jobs and the Covid pandemic.
                  </Card.Text>
                  <a target="_blank" rel="noopener noreferrer" href="https://house-our-heroes.herokuapp.com/ "><Button variant="primary" >Live View on Heroku</Button></a>
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
