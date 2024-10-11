import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../components/Boxes.css';

const Formbook = ({ inquiry }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h3>{inquiry.email}</h3>
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