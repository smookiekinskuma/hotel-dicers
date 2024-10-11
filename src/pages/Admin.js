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
                            <Nav variant="pills" className="flex-column">
                                <div className="logo">
                                    <h1 id="AdminH1">Admin</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 .1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"/>
                                    </svg>
                                </div>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                                        </svg>
                                        <span class="Nav-Css">Guest</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M624 448h-80V113.5C544 86.2 522.5 64 496 64H384v64h96v384h144c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM312.2 1l-192 49.7C106 54.4 96 67.7 96 82.9V448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336V33.2c0-21.6-19.6-37.4-39.8-32.2zM264 288c-13.3 0-24-14.3-24-32s10.8-32 24-32 24 14.3 24 32-10.8 32-24 32z"/>
                                        </svg>
                                        <span class="Nav-Css">Room</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
                                        </svg>
                                        <span class="Nav-Css">Venue</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"/>
                                        </svg>
                                        <span class="Nav-Css">Staff</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 119 8 256 8s248 111.1 248 248zM262.7 90c-54.5 0-89.3 23-116.5 63.8-3.5 5.3-2.4 12.4 2.7 16.3l34.7 26.3c5.2 3.9 12.6 3 16.7-2.1 17.9-22.7 30.1-35.8 57.3-35.8 20.4 0 45.7 13.1 45.7 33 0 15-12.4 22.7-32.5 34C247.1 238.5 216 254.9 216 296v4c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-1.3c0-28.5 83.2-29.6 83.2-106.7 0-58-60.2-102-116.5-102zM256 338c-25.4 0-46 20.6-46 46 0 25.4 20.6 46 46 46s46-20.6 46-46c0-25.4-20.6-46-46-46z"/>
                                        </svg>
                                        <span class="Nav-Css">Inquiries</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1 .9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9 .7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"/>
                                        </svg>
                                        <span class="Nav-Css">Reviews</span>
                                    </Nav.Link>
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