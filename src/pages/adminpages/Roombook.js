import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

const Roombook = ({ roombook }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h2>-Client Details-</h2>
                <h3>Name: {roombook.fName} {roombook.lName}</h3>
                <h4>Email: {roombook.email}</h4>
                <h2>-Room Details-</h2>
                <h4>{roombook.Name}</h4>
                <h4>Room: {roombook.Room}</h4>
            </Col>
            <Col>
                <h2>-Boking Details-</h2>
                <h4>Number of Guests: {roombook.NoGuests}</h4>
                <h4>Number of Children: {roombook.NoKids}</h4>
                <h4>{roombook.start} to {roombook.end}</h4>
                <p>Additional Details: {roombook.AddDetails}</p>
                <h4>Total Price: {roombook.TotalPrice}</h4>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Roombook;