import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

const Venuebook = ({ venuebook }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h2>-Client Details-</h2>
                <h3><b>Name:</b> {venuebook.AccountId?.fName} {venuebook.AccountId?.lName}</h3>
                <h4><b>Email:</b> {venuebook.AccountId?.email}</h4>
                <h2>-Venue Details-</h2>
                <h4><b>Venue Name:</b> {venuebook.VenueId?.Name}</h4>
            </Col>
            <Col>
                <h2>-Booking Details-</h2>
                <h4><b>Date:</b> {new Date(venuebook.Date).toLocaleDateString()}</h4>
                <h4><b>Time:</b> {venuebook.starttime}:00 to {venuebook.endtime}:00</h4>
                <h4><b>Total Hours:</b> {venuebook.totalHours} hours</h4>
                <h4><b>Event:</b> {venuebook.EventType}</h4>
                <h4><b>Total Price:</b> {venuebook.TotalPrice}</h4>
            </Col>
        </Row>
        <Row>
        <h4><b>Additional Details:</b></h4>
        </Row>
        <h4>{venuebook.AddDetails}</h4>
        </Container>
        </div>
    )
}

export default Venuebook;