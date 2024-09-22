import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        
        <motion.div
            
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 0}} 
        
        >
            <div id="header">
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
            </div>
            <div class="Home-P">
                <p class="Gowun">Homepage</p>

                {/* <Button>Test</Button> */}
            </div>

            {/*Basic information about the hotel.*/}
            <Container id='container-home'>
                <Row xs={1} md={3}>
                    <Col class="Temporary">Mission/Vision</Col>
                    <Col class="Temporary">About Us</Col>
                    <Col class="Temporary">Staff</Col>
                    <Col class="Temporary">Room Images</Col>
                    <Col class="Temporary">Review Showcase</Col>
                    <Col class="Temporary">Event Images</Col>
                </Row>
            </Container>
            <Outlet />
        </motion.div>
    )
}

export default Home;