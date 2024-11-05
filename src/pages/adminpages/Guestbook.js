import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

const Guestbook = ({ account }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h3>{account.Role}</h3>
                <h3>Name: {account.fName} {account.lName}</h3>
                <h4>Email: {account.email}</h4>
            </Col>
            <Col>
                <h4>Address: {account.address} {account.city}</h4>
                <h4>ZIP: {account.zip}</h4>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Guestbook;