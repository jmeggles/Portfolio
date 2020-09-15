import React, { Component, Fragment } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap"; //import all contexts
import Placeholder from "../../assets/images/place1-1200.png";
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
                <Card.Img variant="top" src={Placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button >Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button >Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button >Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="projectCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button >Go somewhere</Button>
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
