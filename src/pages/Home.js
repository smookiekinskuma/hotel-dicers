import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/*Squash Setting
--input under motion.div:
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}
*/


const Home = () => {
    return (
        <html>
            
            <main>
                <motion.div
                    
                    initial={{opacity: 0}}
                    animate={{opacity: 1 }}
                    exit={{opacity: 0}} 
                
                >
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
                        

                        <Outlet />
                    </header>
                    <div class="Home-P">
                        <p class="Gowun">Homepage</p>

                        <Button>Test</Button>
                    </div>
                </motion.div>
            </main>
            
        </html>
    )
}

export default Home;