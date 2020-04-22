import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Button block variant="primary">
          LogIn
        </Button>
        <Button block variant="outline-primary">
          Create new account
        </Button>
      </div>
    );
  }
}

export default Navbar;
