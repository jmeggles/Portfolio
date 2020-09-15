import React, { Component, Fragment } from "react";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        {/* copied in from first portfolio (portfolio-responsive) */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
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
              <div className="container">
                <div className="row">
                  <button
                    // style="margin-top: 10px;"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Contact;
