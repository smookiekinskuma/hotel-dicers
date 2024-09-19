import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Page1.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Room = () => {
    return (
        <>
        <h1>Room Booking</h1>

        <Container fluid>
            <Row>
                <Col><Link to ="/Home">Home</Link></Col>
                <Col><Link to ="/Event">Event</Link></Col>
                <Col><Link to ="/Inquiries">Inquiries</Link></Col>
            </Row>
        </Container>

        <Outlet />
        </>
    )
}

export default Room;