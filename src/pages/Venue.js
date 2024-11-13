import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../CSS/Venue.css"
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import "../CSS/InquiriesReviews.css"

import VenueBox from './boxcomponents/VenueBox'

/*Event Booking - Where people will be booking venues for events/meetings*/

const Event = () => {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/venues')
            .then(response => response.json())
            .then(data => setVenue(data))
        .catch(error => console.error('Error fetching room data:', error));      
    }, []);


    const [startDate, setStartDate] = useState(null);
    const [startTime, setstartTime] = useState(null);
    const [endTime, setendTime] = useState(null);
    const [Event, setEvent] = useState('');
    const [EventDesc, setEventDesc] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} Type of Event: ${Event} Start: ${startTime}:00 End: ${endTime}:00 Description: ${EventDesc}`);
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
                </div>

                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Venue" class="Text"><p class="Home active">Venue</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>
                

                    <form id="Venueform" onSubmit={handleSubmit}>
                        <h1 class="FormTitle">Client Details</h1>

                        {/*Full Name*/}
                        <Row className="mb-3">

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Date: </Form.Label>
                        <DatePicker id="date-venue" selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </Form.Group>

                        </Row>

                        {/*Full Name*/}
                        <Row className="mb-3">

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Starting Time: </Form.Label>
                        <Form.Select aria-label="Default select example" value={startTime} onChange={(e) => setstartTime(e.target.value)}>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8">08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23">23:00</option>
                            <option value="24">24:00</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Ending Time: </Form.Label>
                        <Form.Select aria-label="Default select example" value={endTime} onChange={(e) => setendTime(e.target.value)}>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8">08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23">23:00</option>
                            <option value="24">24:00</option>
                        </Form.Select>
                        </Form.Group>

                        </Row>

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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label id="label">Additional Details:</Form.Label>
                                <Form.Control as="textarea" rows={1} value={EventDesc} onChange={(e) => setEventDesc(e.target.value)} />
                        </Form.Group>
                        </Form.Group>

                        </Row>

                        <Button type="submit" class="btn">Search for Available Venues</Button>
                    </form>

                <Outlet />

                <h1>Available Venues</h1>
                <div class='center'>
                    {venue.map(venue => (
                        <VenueBox key={venue.id} venue={venue}/>
                    ))}
                </div>
                                
            </motion.div>
        </>
    )
}

export default Event;