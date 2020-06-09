import React, { Component } from "react";
import Button from "react-bootstrap/Button";

function spotifyAuth() {

  var spotiftAppClient = '19fc8a8433034f17900d383016affa06'
  var returnUri = 'http%3A%2F%2Flocalhost%3A3000%2Fsign-up'

  fetch("https://accounts.spotify.com/authorize?client_id=" 
    + spotiftAppClient + "&response_type=code&redirect_uri="
    + returnUri + "&scope=user-read-email%20user-top-read%20user-read-recently-played")

}

export default class Login extends Component {

  render() {

    var uri = "https://accounts.spotify.com/authorize?client_id=19fc8a8433034f17900d383016affa06&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsign-up&scope=user-read-email%20user-top-read%20user-read-recently-played"

    return (
      
        <form>
          <div className="auth-inner">
          <div className="welcome-header">
            <h2>Welcome</h2>
          </div>

          <Button variant="info" className="enter-btn btn-block" type="submit" href={uri}>
            GET STARTED
          </Button>
          </div>
        </form>
     
    );
  }
}
