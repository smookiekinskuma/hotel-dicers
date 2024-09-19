import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Page1.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Inquiries = () => {
    return (
        <>
        <h1>Inquiries/Reviews</h1>

        <Container fluid>
            <Row>
                <Col><Link to ="/Home">Home</Link></Col>
                <Col><Link to ="/Room">Room</Link></Col>
                <Col><Link to ="/Event">Event</Link></Col>
            </Row>
        </Container>

        <Outlet />
        </>
    )
}

export default Inquiries;