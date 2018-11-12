import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Login, Timeline } from "./pages";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/timeline" component={Timeline} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
