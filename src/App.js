import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/Home"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
       
       
          <h2 style={{ textAlign: "center" }}></h2> <br />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
