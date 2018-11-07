import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Timeline } from "./pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
