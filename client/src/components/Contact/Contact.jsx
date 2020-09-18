import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
    err: ""
  };
  formSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
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
            <Col lg={6} sm={12} className="contactFormCol">
              <h4>Send me a message!</h4>
              <form
                className="contact-form"
                onSubmit={(e) => this.formSubmit(e)}
              >
                <label className="message-name" htmlFor="message-name">
                  Your Name
                </label>
                <br />
                <input
                  onChange={(e) => this.setState({ name: e.target.value })}
                  name="name"
                  className="message-name"
                  type="text"
                  placeholder="Your Name"
                  value={this.state.name}
                />
                <br />
                <label className="message-email" htmlFor="message-email">
                  Your Email
                </label>
                <br />
                <input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  name="email"
                  className="message-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={this.state.email}
                />

                <br />
                <label className="message" htmlFor="message-input">
                  Your Message
                </label>
                <br />
                <textarea
                  onChange={(e) => this.setState({ message: e.target.value })}
                  name="message"
                  className="message-input"
                  type="text"
                  placeholder="Please write your message here"
                  value={this.state.message}
                  required
                />
                <div className="contactButton">
                  <Button type="submit">
                    {this.state.ButtonText}
                    Submit
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Contact;
