import React from 'react';
import { motion } from 'framer-motion';

import Guestbook from './adminpages/Guestbook';
import Roombook from './adminpages/Roombook';
import Venuebook from './adminpages/Venuebook';
import Staffbook from './adminpages/Staffbook';
import Formbook from './adminpages/Formbook';
import Inboxbook from './adminpages/Inboxroom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import '../CSS/Admin.css';


/* Admin Page - Admins have access to all information such as clients, booking, etc. */

const Admin = () => {
    return ( 
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}

                id="Adminbody"
            >
                
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> {/*OH MY GOD IT'S THE THING!!  !! ! !*/}
                    <Row>

                        <Col sm={2} id="AdminNavBar"> {/*Bar for accessing different bookings/lists*/}
                        <h1 id="AdminH1">Admin Page</h1>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Guest</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Room</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Venue</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Staff</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fifth">Inquiries</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="sixth">Reviews</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>

                        <Col sm={9}> {/*The Content*/}
                        <Tab.Content>
                            <Tab.Pane eventKey="first"><Guestbook /></Tab.Pane>
                            <Tab.Pane eventKey="second"><Roombook /></Tab.Pane>
                            <Tab.Pane eventKey="third"><Venuebook /></Tab.Pane>
                            <Tab.Pane eventKey="fourth"><Staffbook /></Tab.Pane>
                            <Tab.Pane eventKey="fifth"><Formbook /></Tab.Pane>
                            <Tab.Pane eventKey="sixth"><Inboxbook /></Tab.Pane>
                        </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>

            </motion.div>
        </>
    )
}

export default Admin;