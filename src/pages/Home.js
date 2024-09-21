import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Components/Button';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <header>
                <Container fluid>
                    <Row>
                        <Col><Link to ="/Room">Room</Link></Col>
                        <Col><Link to ="/Event">Event</Link></Col>
                        <Col><Link to ="/Inquiries">Inquiries</Link></Col>
                    </Row>
                </Container>
                

                <Outlet />
            </header>
            <body> 
                <div>
                    <h1>Home Page</h1>
                </div>
            </body>
        </main>
    )
}

export default Home;