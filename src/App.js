import React, { Fragment } from 'react'; // add Fragment if used below
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // change BrowserRouter to Router
import Home from "./pages/Home"
import About from "../src/components/About/About";

import NoMatch from "./pages/NoMatch"

function App() {
  return (
    // using Fragment for newer React naming convention and importing it from react
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
