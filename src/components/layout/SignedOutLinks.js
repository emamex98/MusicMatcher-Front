import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SignedInLinks extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto justify-content-end">
                <li className="nav-login">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-signup">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
            </ul>
        );
    }
}
export default SignedInLinks;