import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import UserProfile from '../dashboard/UserProfile';
import Chats from '../dashboard/Chats';
import Dashboard from '../dashboard/Dashboard';

class Navbar extends Component {
 
  render() {
    var userSigned = false;

    const links = userSigned ? <SignedInLinks/> : <SignedOutLinks/>;

    
    return (
      <div >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-brand">
          <Link className="navbar-brand" to={"/login"}>Music Matcher</Link>
          </div>
          { links }
        </div>
      </nav>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/my-profile" component={UserProfile} />
          <Route path="/my-chats" component={Chats} />
        </Switch>
      </div>
    );
  }
}

export default Navbar;
