import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../boxcomponents/Boxes.css';

//This is Inquiries btw

const Formbook = ({ inquiry }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h3>{inquiry.fullname}</h3>
                <h4>{inquiry.email}</h4>
                <h4>Inquiry: {inquiry.inquire}</h4>
                <h4>Date: {inquiry.Date}</h4>
            </Col>
            <Col>
                <h3>{inquiry.Title}</h3>
                <h4>{inquiry.Description}</h4>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Formbook;