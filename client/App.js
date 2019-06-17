import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Users from "./containers/Users";
import asyncCmp from "./hoc/AsyncComponent";

const AsyncPizza = asyncCmp(() => {
  return import("./containers/Pizza.js");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
