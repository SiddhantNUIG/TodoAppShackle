import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./Components/Home"
import TodoView from "./Components/TodoView"
import TodoCreateView from "./Components/TodoCreate"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    //run checkAuthentication
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/todoview" component={TodoView} />
          <Route exact path="/create_todo" component={TodoCreateView} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //    checkAuthentication: () => dispatch(checkAuthentication())
});

export default connect(null, mapDispatchToProps)(App);
