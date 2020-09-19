import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./style.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
    err: "",
  };
  onChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

onSubmit = (event) => {
    event.preventDefault()
    let contactjson = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios.post("/contact/message", contactjson)
            .then(response => {
                alert("Your message has been sent.")
            })
            .catch(err => {
                console.log(err)
            })
        event.target.reset()
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <Fragment>
        <Container className="contactContainer">
          <h1 className="sectionTitle">CONTACT</h1>
          <Row>
            <Col>
              <div className="contactLinks">
                <h5>Central Florida</h5>
                <h5>
                  <a href={`mailto:jmeggles@gmail.com`}>jmeggles@gmail.com</a>
                </h5>
                <h5>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/jody-eggleston"
                  >
                    Linkedin
                  </a>
                </h5>
                <h5>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jmeggles"
                  >
                    GitHub
                  </a>
                </h5>
                <h5>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/1fVtFGpuRR1aFmVOI-IFFB2vVIiAVNRa9tTKOaSPOG4o/edit?usp=sharing"
                  >
                    Rèsumè
                  </a>
                </h5>
              </div>
            </Col>
            {/* ------------------------- copied in from another project...needs to be formatted-------------------------------------------- */}
            <Col lg={6} sm={12}>
              <h4>Send me a message!</h4>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="msg"
                      rows="3"
                      value={this.state.msg}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Contact;
