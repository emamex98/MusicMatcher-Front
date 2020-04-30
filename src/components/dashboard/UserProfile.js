import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Avatar from '../../assets/avatar.png';

const UserProfile = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Avatar} roundedCircle />
            <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>
                    <div>Age</div> 
                    <div>Other data about my profile, like city, ocupation, etc</div>
                </Card.Text>
                <Button variant="primary">Edit Profile</Button>
            </Card.Body>
        </Card>
    )
}
export default UserProfile