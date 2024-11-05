import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

const Roombook = ({ roombook }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h3>Name: {roombook.fName} {roombook.lName}</h3>
                <h4>Email: {roombook.email}</h4>
            </Col>
            <Col>
                <h4>{roombook.Name}</h4>
                <h4>Room: {roombook.Room}</h4>
                <h4>{roombook.start} to {roombook.end}</h4>
                <h4>Total Price: {roombook.TotalPrice}</h4>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Roombook;