import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../adminpages/adminCSS/Staff.css';

const Staffbook = ({ staff }) => {
    return (
    <div id = "LongBox">
        <Container>
            <Row>
                <Col xs={2}>
                    <img id = "Longimg" src={staff.staffimage} alt={staff.Name}/>
                </Col>
                <Col className='Text'>
                    <h3 className='Text-CSS'>Name: {staff.Name}</h3>
                    <h4 className='Text-CSS'>Role: {staff.Role}</h4>
                    <h4 className='Text-CSS'>Location: {staff.address} {staff.city}</h4>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Staffbook;