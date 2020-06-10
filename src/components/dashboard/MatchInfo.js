import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Avatar from "../../assets/avatar.png";

const MatchInfo = () => {
  return (
    <div className="auth-inner">
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            You both like Lady Gaga, Lana del Rey, Kim Petras and Charli XCX
          </Card.Title>
          <Card.Text>
            <div style={{textAlign: "center"}}>3 weeks ago</div>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={Avatar} roundedCircle />
        <Card.Title>
        <div style={{textAlign: "center"}}>MATCH NAME</div>
        </Card.Title>
      </Card>
    </div>
  );
};
export default MatchInfo;
