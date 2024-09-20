import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Event = () => {
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

        <Outlet />
        </>
    )
}

export default Event;