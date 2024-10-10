import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../CSS/Event.css"

import EventBox from './components/EventBox'

/*Event Booking - Where people will be booking venues for events/meetings*/

const Event = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Event, setEvent] = useState('');
    const [Service, setService] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} End Date: ${endDate} Type of Event: ${Event}`);
    }
    return (
        <>
            <motion.div  
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}     
            >
                <div id="header-venue">
                <h1 class="font-venue">Venue Booking</h1>

                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home active">Venue</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>
                </div>

                <form id="Venueform" onSubmit={handleSubmit}>
                    {/*Full Name*/}
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Starting Date: </Form.Label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Ending Date: </Form.Label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                    </Form.Group>

                    </Row>

                    {/*Full Name*/}
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Type of Event: </Form.Label>
                    <Form.Select aria-label="Default select example" value={Event} onChange={(e) => setEvent(e.target.value)}>
                        <option value="Party">Party</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Debut">Debut</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Service/s: </Form.Label>
                    <Form.Select aria-label="Default select example" value={Service} onChange={(e) => setService(e.target.value)}>
                        <option value="Food and Drinks">Food and Drinks</option>
                        <option value="Service 1">Service 1</option>
                        <option value="Service 2">Service 2</option>
                        <option value="Service 3">Service 3</option>
                    </Form.Select>
                    </Form.Group>

                    </Row>
                        
                    <Button type="submit" class="btn">Search for Available Venues</Button>
                </form>

                <Outlet />

                <h1>Available Venues</h1>

                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                                
            </motion.div>
        </>
    )
}

export default Event;