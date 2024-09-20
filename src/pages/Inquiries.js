import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Inquiries = () => {
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`TItle: ${Title} & Description: ${Desc}`);
    }
    return (
        <>
        <h1>Inquiries/Reviews</h1>

        <Container fluid>
            <Row>
                <Col><Link to ="/">Home</Link></Col>
                <Col><Link to ="/Room">Room</Link></Col>
                <Col><Link to ="/Event">Event</Link></Col>
            </Row>
        </Container>

        <form onSubmit={handleSubmit}>
            <label>
                Title:
            </label>
            <input type="text" value={Title} onChange={(e) =>
            setTitle(e.target.value)} />

            <label>
                Desctiption:
            </label>
            <input type="text" value={Desc} onChange={(e) =>
            setDesc(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

        <Outlet />
        </>
    )
}

export default Inquiries;