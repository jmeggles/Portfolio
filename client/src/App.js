import React, { Fragment } from 'react'; // add Fragment if used below
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // change BrowserRouter to Router
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    // changing div to Fragment for newer React naming convention and importing it from react
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
