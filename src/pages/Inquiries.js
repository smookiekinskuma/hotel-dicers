import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CRating } from '@coreui/react-pro';

import '@coreui/coreui-pro/dist/css/coreui.min.css'
import "../CSS/InquiriesReviews.css"

import ReviewShowcase from './boxcomponents/ReviewBox';

/*Inquiries/Reviews - Where people can submit reviews or inquiries*/

const Inquiries = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/reviews')
            .then(response => response.json())
            .then(data => setReview(data))
        .catch(error => console.error('Error fetching room data:', error));      
    }, []);

    const [IHelp, IsetHelp] = useState('');
    const [ITitle, IsetTitle] = useState('');
    const [IDesc, IsetDesc] = useState('');
    const inquirySubmit = (event) => {
        event.preventDefault();
        alert(`INQUIRY: Help: ${IHelp} & Title: ${ITitle} & Description: ${IDesc}`);
    }

    const [Rrate, RsetRate] = useState(3)
    const [RTitle, RsetTitle] = useState('');
    const [RDesc, RsetDesc] = useState('');
    const reviewSubmit = (event) => {
        event.preventDefault();
        alert(`REVIEW: Rate: ${Rrate} Title: ${RTitle} & Description: ${RDesc}`);
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
            >

                <div id="header-inquiry">
                <h1 class="font-inquiry">Inquiries & Reviews</h1>

                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Venue</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home active">Inquiries</p></Link></Col>
                    </Row>
                </Container>
                </div>

                        <div class="parent">
                            <div class="div1">
                            <h1>INQUIRIES</h1>

                            <form id="inquiryreviewform" onSubmit={inquirySubmit}> {/*Form to make an Inquiry*/}

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label id="label"> What do you want to inquire about?: </Form.Label>
                                <Form.Select aria-label="Default select example" value={IHelp} onChange={(e) => IsetHelp(e.target.value)}>
                                    <option value="About Our Service">About Our Service</option>
                                    <option value="Help & Assistance">Help & Assistance</option>
                                    <option value="Complaint">Complaint</option>
                                    <option value="Hiring">Hiring</option>
                                    <option value="Business">Business</option>
                                    <option value="Others">Others</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label id="label"> Title: </Form.Label>
                                <Form.Control type="text" placeholder="Title" value={ITitle} onChange={(e) => IsetTitle(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={IDesc} onChange={(e) => IsetDesc(e.target.value)} />
                            </Form.Group>

                            <Button type="submit" class="btn">Submit</Button>
                            </form>
                            </div>

                            <div class="div2">
                            <h1>LEAVE A REVIEW</h1>

                            <form id="inquiryreviewform" onSubmit={reviewSubmit}> {/*Form to make an Inquiry*/}

                            <div className="d-flex align-items-center">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Rating:</Form.Label>
                                <CRating size='lg' onChange={(value) => RsetRate(value)} value={Rrate} />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label id="label"> Title: </Form.Label>
                                <Form.Control type="text" placeholder="Title" value={RTitle} onChange={(e) => RsetTitle(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={RDesc} onChange={(e) => RsetDesc(e.target.value)} />
                            </Form.Group>

                            <Button type="submit" classname="btn">Submit</Button>
                            </form>
                            </div>

                            <div class="div3">
                                <h1>Hotel Reviews</h1>
                                {review.map((reviewMember, index) => (
                                    <ReviewShowcase key={index} review={reviewMember}/>
                                ))}
                            </div>
                        </div>

                <Outlet />

            </motion.div>
        
        </>
    )
}

export default Inquiries;