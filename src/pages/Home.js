import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
const Home = () => {
    return (
        <html>
            
            <main>
                <header>
                    <div class="Heading-Text">
                        <h1 class="font-size">Hotel Dicers -TypeMons</h1>
                    </div>
                    <Container fluid id="container">
                        <Row>
                            <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                            <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                            <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Events</p></Link></Col>
                            <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                        </Row>
                    </Container>
                    

                    <Outlet />
                </header>
                <div>
                    <p class="Gowun">Basic Font -Gowun</p>

                    <Button>Test</Button>
                </div>

            </main>
            
        </html>
    )
}

export default Home;