import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

const Roombook = ({ roombook }) => {
    return (
        <div id="LongBox">
            <Container>
                <Row>
                    <Col>
                        <h2>-Client Details-</h2>
                        <h3>Name: {roombook.AccountId?.fName} {roombook.AccountId?.lName}</h3> {/* Use optional chaining */}
                        <h4>Email: {roombook.AccountId?.email}</h4> {/* Access email if needed */}
                        <h2>-Room Details-</h2>
                        <h4>{roombook.RoomId?.Name}</h4> {/* Access room details */}
                        <h4>Room: {roombook.RoomId?.Room}</h4>
                    </Col>
                    <Col>
                        <h2>-Booking Details-</h2>
                        <h4>Number of Guests: {roombook.NoGuests}</h4>
                        <h4>Number of Children: {roombook.NoKids}</h4>
                        <h4>{new Date(roombook.start).toLocaleDateString()} to {new Date(roombook.end).toLocaleDateString()}</h4>
                        <p>Additional Details: {roombook.AddDetails}</p>
                        <h4>Total Price: {roombook.TotalPrice}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Roombook;