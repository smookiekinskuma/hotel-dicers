import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
    return (
        <html>
            
            <main>
                <header>
                    <div class="Heading-Text">
                        <h1 class="font-size">Hotel Dicers</h1>
                        <h1 class="subfont-size">Make the cake, and eat it too.</h1>
                    </div>
                    <Container fluid id="container">
                        <Row>
                            <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                            <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                            <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Events</p></Link></Col>
                            <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                        </Row>
                    </Container>
                </header>

                <div>
                    <p class="Gowun">Homepage</p>
                </div>

                {/*Basic information about the hotel.*/}
                <Container class="Temporary">
                    <Row xs={1} md={3}>
                        <Col>Mission/Vision</Col>
                        <Col>About Us</Col>
                        <Col>Staff</Col>
                        <Col>Room Images</Col>
                        <Col>Review Showcase</Col>
                        <Col>Event Images</Col>
                    </Row>
                </Container>

            <Outlet />
            </main>
            
        </html>
    )
}

export default Home;