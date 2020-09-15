import React, { Fragment } from "react";
import "./style.css";

//stateless since this info will not likely change
const Footer = () => {
    return (
      <Fragment>
        <p className="footer">Copyright ©2020 | Jody Eggleston</p>
      </Fragment>
    );
  }

export default Footer;
