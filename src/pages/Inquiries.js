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

    //Inquiries
    const [IName, IsetName] = useState('');
    const [IEmail, IsetEmail] = useState('');
    const [IHelp, IsetHelp] = useState('');
    const [ITitle, IsetTitle] = useState('');
    const [IDesc, IsetDesc] = useState('');
    const inquirySubmit = (event) => {
        event.preventDefault();

        const inquiryData = {
            fullname: IName,
            email: IEmail,
            inquire: IHelp,
            Title: ITitle,
            Description: IDesc
        };

        fetch('http://localhost:5000/api/inquiries/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inquiryData)
        })
        .then (response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then (data => {
            alert('Inquiry submitted successfully!');
        // Optionally, reset the form fields
            IsetName('');
            IsetEmail('');
            IsetHelp('');
            IsetTitle('');
            IsetDesc('');
        })
        .catch(error => {
            console.error('Error submitting inquiry:', error);
            alert('There was a problem submitting your inquiry. Please try again later.');
        })
    }

    //Reviews
    const [RName, RsetName] = useState('');
    const [REmail, RsetEmail] = useState('');
    const [Rrate, RsetRate] = useState(3)
    const [RTitle, RsetTitle] = useState('');
    const [RDesc, RsetDesc] = useState('');
    const reviewSubmit = (event) => {
        event.preventDefault();

        const reviewData = {
            fullName: RName,
            email: REmail,
            Rating: Rrate,
            Title: RTitle,
            Description: RDesc
        };

        fetch('http://localhost:5000/api/reviews/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then (response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then (data => {
            alert('Review submitted successfully!');
        // Optionally, reset the form fields
            RsetName('');
            RsetEmail('');
            RsetRate('');
            RsetTitle('');
            RsetDesc('');
        })
        .catch(error => {
            console.error('Error submitting review:', error);
            alert('There was a problem submitting your review. Please try again later.');
        })
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
                </div>


                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Venue" class="Text"><p class="Home">Venue</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home active">Inquiries</p></Link></Col>
                    </Row>
                </Container>
                
                        <div class="parent">
                            <div class="div1">
                            <h1>INQUIRIES</h1>

                            <form id="inquiryreviewform" onSubmit={inquirySubmit}> {/*Form to make an Inquiry*/}

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label id="label"> Name: </Form.Label>
                                    <Form.Control type="text" placeholder="Name or Nickname" value={IName} onChange={(e) => IsetName(e.target.value)} required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label id="label"> Email: </Form.Label>
                                    <Form.Control type="email" placeholder="email@email.com" value={IEmail} onChange={(e) => IsetEmail(e.target.value)} required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label id="label"> What do you want to inquire about?: </Form.Label>
                                <Form.Select aria-label="Default select example" value={IHelp} onChange={(e) => IsetHelp(e.target.value)} required>
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
                                <Form.Control type="text" placeholder="Title" value={ITitle} onChange={(e) => IsetTitle(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={IDesc} onChange={(e) => IsetDesc(e.target.value)} required/>
                            </Form.Group>

                            <Button type="submit" class="btn">Submit</Button>
                            </form>
                            </div>

                            <div class="div2">
                            <h1>LEAVE A REVIEW</h1>

                            <form id="inquiryreviewform" onSubmit={reviewSubmit}> {/*Form to make an Inquiry*/}

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label id="label"> Name: </Form.Label>
                                    <Form.Control type="text" placeholder="Name or Nickname" value={RName} onChange={(e) => RsetName(e.target.value)} required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label id="label"> Email: </Form.Label>
                                    <Form.Control type="email" placeholder="email@email.com" value={REmail} onChange={(e) => RsetEmail(e.target.value)} required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="d-flex align-items-center">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Rating:</Form.Label>
                                <CRating size='lg' onChange={(value) => RsetRate(value)} value={Rrate} required/>
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label id="label"> Title: </Form.Label>
                                <Form.Control type="text" placeholder="Title" value={RTitle} onChange={(e) => RsetTitle(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={RDesc} onChange={(e) => RsetDesc(e.target.value)} required/>
                            </Form.Group>

                            <Button type="submit" classname="btn">Submit</Button>
                            </form>
                            </div>

                            <div class="div3">
                                <h1>Hotel Reviews</h1>
                                {review.map(review => (
                                    <ReviewShowcase key={review._id} review={review}/>
                                ))}
                            </div>
                        </div>

                <Outlet />

            </motion.div>
        
        </>
    )
}

export default Inquiries;