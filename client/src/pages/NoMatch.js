import React, { Component, Fragment } from "react";

class NoMatch extends Component {
    render() {
        return (
            <Fragment>
                {/* React.Fragment also provides a component for rendering multiple elements without a div wrapper. */}
                {/* <> </> can also be used in place of Fragment or div  */}
                <h1 className="noMatch-h1">404 | PAGE NOT FOUND</h1>
            </Fragment>
        )
    }
}

export default NoMatch;
