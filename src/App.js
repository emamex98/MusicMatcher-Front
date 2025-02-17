import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/layout/Login";
import SignUp from "./components/layout/Signup";
import Navbar from './components/layout/Navbar';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-brand">
          <Link className="navbar-brand" to={"/sign-in"}>Music Matcher</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-login">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-signup">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;