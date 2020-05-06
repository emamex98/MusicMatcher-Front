import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SignedInLinks extends Component {
    render() {
      return (
          <ul className="navbar-nav ml-auto justify-content-end ">
            <li className="nav-dashboard">
                <Link className="nav-link"to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="nav-myprofile">
                <Link className="nav-link"to={"/my-profile"}>My Profile</Link>
            </li>
            <li className="nav-mychats">
                <Link className="nav-link" to={"/my-chats"}>My Chats</Link>
            </li>
            <li className="nav-logout">
                <Link className="nav-link" to={"/logout"}>Logout</Link>
            </li>
          </ul>
        );
    }
  }
  
  export default SignedInLinks;