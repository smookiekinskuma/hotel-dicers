import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CSS/Event.css"

import { CTimePicker } from '@coreui/react-pro';
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import "../CSS/InquiriesReviews.css"

import VenueBox from './components/EventBox'

/*Event Booking - Where people will be booking venues for events/meetings*/

const Event = () => {
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/venues')  // Connect to backend API
          .then(response => response.json())
          .then(data => setVenue(data))
          .catch(error => console.error('Error fetching Venues:', error));
    }, []);


    const [startDate, setStartDate] = useState(null);
    const [startTime, setstartTime] = useState(null);
    const [endTime, setendTime] = useState(null);
    const [Event, setEvent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} Type of Event: ${Event} Start: ${startTime} End: ${endTime}`);
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
                    <Form.Label id="label"> Date: </Form.Label>
                    <DatePicker id="date-venue" selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Type of Event: </Form.Label>
                    <Form.Select aria-label="Default select example" value={Event} onChange={(e) => setEvent(e.target.value)}>
                        <option value="Party">Party</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Debut">Debut</option>
                    </Form.Select>
                    </Form.Group>

                    </Row>

                    {/*Full Name*/}
                    <Row className="mb-3">

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Starting Time: </Form.Label>
                    <Form.Control type="time" value={startTime} onChange={(e) => setstartTime(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label id="label"> Ending Time: </Form.Label>
                    <Form.Control type="time" value={endTime} onChange={(e) => setendTime(e.target.value)}/>
                    </Form.Group>

                    </Row>
                        
                    <Button type="submit" class="btn">Search for Available Venues</Button>
                </form>

                <Outlet />

                <h1>Available Venues</h1>

                <>
                    {venue.map(venue => (
                        <VenueBox key={venue.id} venue={venue}/>
                    ))}
                </>
                                
            </motion.div>
        </>
    )
}

export default Event;