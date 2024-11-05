import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfilePicture from '../images/Logo1.png';

import Mission from './homepagecomponents/Mission';
import About from './homepagecomponents/AboutUs';
import StaffImages from './homepagecomponents/Staff';
import RoomImages from './homepagecomponents/RoomImages';
import VenueImages from './homepagecomponents/VenueImages';
import Contact from './homepagecomponents/Contact';


const Home = () => {
    return (
        
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 0}} 
        >
            <div id="header">
                <div class="Heading-Text">
                    <img className="profile-Head" src={ProfilePicture} alt="logo"/>
                </div>
                <Container fluid id="container">
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home active">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Venue</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>

            </div>


            {/*Basic information about the hotel.*/} 

            <Container fluid id='container-home'>
                <Row xs={1} md={3}>
                    <Col id="Grid-B" xs={{order:0}}><p className='top'><Mission /></p></Col>
                    <Col id="Grid" xs={{ order:1}}><About /></Col>
                    <Col id="Grid-B" xs={{ order:2}}><Contact /></Col>
                    <Col id="Grid" xs={{order:3}}><RoomImages className="bottom"/></Col>
                    <Col id="Grid-B" xs={{order:4}}><StaffImages /></Col>
                    <Col id="Grid" xs={{order:5}}><VenueImages /></Col>
                </Row>
            </Container>
            <Outlet />
        </motion.div>
    )
}

export default Home;