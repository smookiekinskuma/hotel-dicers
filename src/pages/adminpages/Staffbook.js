import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../components/Boxes.css';

const Staffbook = ({ staff }) => {
    return (
    <div id = "LongBox">
        <Container>
        <Row>
            <Col xs={2}>
                <img id = "Longimg" src={staff.staffimage} alt={staff.Name}/>
            </Col>
            <Col>
                <h3>Name: {staff.Name}</h3>
                <h4>Role: {staff.Role}</h4>
                <h4>Location: {staff.address} {staff.city}</h4>
            </Col>
        </Row>
        </Container>
    </div>
    )
}

export default Staffbook;