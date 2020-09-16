import React, { Component, Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <Fragment>
          <Container className="contactContainer col-lg-5">
          <h1 className="sectionTitle">CONTACTS</h1>
        <div>
          <h5>
           Central Florida
          </h5>
          <h5>
            <a href={`mailto:jmeggles@gmail.com`}>
              jmeggles@gmail.com
            </a>
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
        </div>

        {/* ----------------------------------------------------------- 
        
        TEMPORARY: copied in from first portfolio (portfolio-responsive) */}

      
          <div className="row">
            <div className="col-md-12">
              <label>
                <b>Name</b>
              </label>
              <input
                placeholder="Your Name"
                // style="margin-bottom: 30px"
                className="form-control"
              />
              <label>
                <b>Email</b>
              </label>
              <input
                placeholder="example@gmail.com"
                // style="margin-bottom: 30px"
                className="form-control"
              />
              <label>
                <b>Message</b>
              </label>
              <textarea
                placeholder="Send me a message!"
                className="form-control"
                rows="10"
              ></textarea>
              <div>
                <div>
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
export default Contact;
