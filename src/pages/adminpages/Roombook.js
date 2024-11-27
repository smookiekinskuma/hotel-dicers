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
                        <h4><b>Name:</b> {roombook.AccountId?.fName} {roombook.AccountId?.lName}</h4> {/* Use optional chaining */}
                        <h4><b>Email:</b> {roombook.AccountId?.email}</h4> {/* Access email if needed */}
                        <h2>-Room Details-</h2>
                        <h4><b>Room Name: </b>{roombook.RoomId?.Name}</h4> {/* Access room details */}
                        <h4><b>Room:</b> {roombook.RoomId?.Room}</h4>
                    </Col>
                    <Col>
                        <h2>-Booking Details-</h2>
                        <h4><b>Number of Guests:</b> {roombook.NoGuests}</h4>
                        <h4><b>Number of Children:</b> {roombook.NoKids}</h4>
                        <h4>{new Date(roombook.start).toLocaleDateString()} to {new Date(roombook.end).toLocaleDateString()}</h4>
                        <h4><b>Total number of nights:</b> {roombook.totalNightsCountOverall}</h4>
                        <h4><b>Total Price:</b> {roombook.TotalPrice}</h4>
                    </Col>
                </Row>
                <Row>
                <h4><b>Additional Details:</b></h4>
                </Row>
                <h4>{roombook.AddDetails}</h4>
            </Container>
        </div>
    );
};

export default Roombook;