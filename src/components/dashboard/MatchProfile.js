import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Avatar from "../../assets/avatar.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MatchProfile = () => {
  return (
    <CardColumns>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Anthony Stark</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Peter Parker</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Thor Odinson</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Peter Quill</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Drax</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Rocket Racoon</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Thanos</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Bruce Banner</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Body>
          <Card.Title>Groot</Card.Title>
          <Card.Text>36 years old. </Card.Text>
          <Link to="/match-profile">
            <Button variant="primary">See Profile</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardColumns>
  );
};
export default MatchProfile;
