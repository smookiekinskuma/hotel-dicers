import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../components/Boxes.css';

const Venuebook = ({ venuebook }) => {
    return (
        <div id = "LongBox">
        <Container>
        <Row>
            <Col>
                <h3>Name: {venuebook.fName} {venuebook.lName}</h3>
                <h4>Email: {venuebook.email}</h4>
            </Col>
            <Col>
                <h4>{venuebook.Name}</h4>
                <h4>Date: {venuebook.Date}</h4>
                <h4>Time: {venuebook.starttime} to {venuebook.endtime}</h4>
                <h4>Total Price: {venuebook.TotalPrice}</h4>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Venuebook;