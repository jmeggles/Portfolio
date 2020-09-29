import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
import "./style.css";

class Contact extends Component {
  // TODO - this contact form needs to be completed with a serverless function
  //   state = {
  //     name: "",
  //     email: "",
  //     message: "",
  //     sent: false,
  //     buttonText: "Send Message",
  //     err: "",
  //   };
  //   onChange = event => {
  //     this.setState({
  //         [event.target.name]: event.target.value
  //     })
  // }

  // onSubmit = (event) => {
  //     event.preventDefault()
  //     let contactjson = {
  //       name: this.state.name,
  //       email: this.state.email,
  //       message: this.state.message,
  //     };

  //     axios.post("/contact/message", contactjson)
  //             .then(response => {
  //                 alert("Your message has been sent.")
  //             })
  //             .catch(err => {
  //                 console.log(err)
  //             })
  //         event.target.reset()
  //         this.setState({
  //             name: "",
  //             email: "",
  //             message: ""
  //         })
  //     }

  //   resetForm = () => {
  //     this.setState({
  //       name: "",
  //       email: "",
  //       message: ""
  //     });
  //   };

  render() {
    return (
      <Fragment>
        <Container className="contactContainer">
          <h1 className="sectionTitle" id="contact">CONTACT</h1>
          <Row>
            <Col>
              <div className="contactLinkSection">
                <h5 className="fas fa-home icon-home"> Central Florida</h5>
                <h5>
                  <a className="contactLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:jmeggles@gmail.com`}
                  >
                    <i className="fas fa-envelope fa-icon" id="icon-link"></i>
                    jmeggles@gmail.com
                  </a>
                </h5>
                <h5>
                  <a className="contactLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/jody-eggleston"
                  >
                    {" "}
                    <i className="fab fa-linkedin-in fa-icon"></i><span>Linkedin</span>
                  </a>
                </h5>
                <h5>
                  <a className="contactLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jmeggles"
                  >
                    <i className="fab fa-github fa-icon"></i>
                    GitHub
                  </a>
                </h5>
                <h5>
                  <a className="contactLinks"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/1fVtFGpuRR1aFmVOI-IFFB2vVIiAVNRa9tTKOaSPOG4o/edit?usp=sharing"
                  >
                    <i className="fas fa-file fa-icon"></i>
                    Rèsumè
                  </a>
                </h5>
              </div>
            </Col>
            {/* =================================================*/}

            {/* ===== needs backend =============== */}

            {/* ==================================================== */}
  // TODO - this contact form needs to be completed with a serverless function

            {/* <Col lg={6} sm={12}>
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
            </Col> */}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Contact;
