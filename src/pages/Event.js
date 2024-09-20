import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Event = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Guests, setGuests] = useState('');
    const [Event, setEvent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} End Date: ${endDate} No. of Guests: ${Guests} Type of Event: ${Event}`);
    }
    return (
        <>
        <h1>Event Booking</h1>

        <Container fluid>
            <Row>
                <Col><Link to ="/">Home</Link></Col>
                <Col><Link to ="/Room">Room</Link></Col>
                <Col><Link to ="/Inquiries">Inquiries</Link></Col>
            </Row>
        </Container>

        <form onSubmit={handleSubmit}>
            <label>Starting Date: </label>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
            <label>Ending Date: </label>
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
            />

            <label>No. of Guests: </label>
            <input type="text" value={Guests} onChange={(e) =>
            setGuests(e.target.value)} />

            <label>Type of Event: </label>
            <input type="text" value={Event} onChange={(e) =>
            setEvent(e.target.value)} />

            <button type="submit">Submit</button>
        </form>

        <Outlet />
        </>
    )
}

export default Event;