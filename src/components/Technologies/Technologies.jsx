import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

const Technologies = () => {
    return (
        <Fragment>
            <Container className="technologiesContainer">
                <h2 className="sectionTitle" id="techs">TECHNOLOGIES</h2>
                <Row>
                    <Col md={4} sm={12}>
                        <Card className="techCard">
                            <i className="fas fa-code iconstyle" />
                            <Card.Body>
                                <Card.Title>Front-end</Card.Title>
                                <Card.Text>
                                JavaScript, React.JS, Handlebars.JS, HTML5, CSS3, Bootstrap, WordPress, jQuery, AJAX
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card className="techCard">
                            <i className="fas fa-server iconstyle" />
                            <Card.Body>
                                <Card.Title>Back-end & Databases</Card.Title>
                                <Card.Text>
                                  Node.JS, Express.JS, PHP, AWS, MongoDB, MySQL
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12}>
                        <Card className="techCard">
                            <i className="fas fa-sitemap iconstyle" />
                            <Card.Body>
                                <Card.Title>Platforms & Interfaces</Card.Title>
                                <Card.Text>
                                GitHub, Herkou, Postman, Netlify, Bluehost
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Technologies;