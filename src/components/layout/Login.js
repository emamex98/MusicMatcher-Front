import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
  render() {
    return (
      <form>
        <div className="welcome-header">
          <h2>Welcome</h2>
        </div>

        <Button variant="info" className="enter-btn btn-block" type="submit">
          GET STARTED
        </Button>
      </form>
    );
  }
}
