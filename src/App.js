import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from './components/dashbord'
import SignInSide from './components/signin'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashbord />
          </Route>
          <Route path="/signin">
            <SignInSide />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

