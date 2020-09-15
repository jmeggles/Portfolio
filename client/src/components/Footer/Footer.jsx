import React, { Fragment } from "react";
import "./style.css";

//stateless since this info will not likely change
const Footer = () => {
  return (
    <Fragment>
      <p className="footer">
        Copyright ©2020 |{" "}
        <span className="footerSpan"><span role="img" aria-label="parkle"> ✨ </span> Jody Eggleston <span role="img" aria-label="parkle"> ✨ </span></span>
      </p>
    </Fragment>
  );
};

export default Footer;
