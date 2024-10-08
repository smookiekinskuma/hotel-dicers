import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import "../CSS/Event.css"

import EventBox from './components/EventBox'

/*Event Booking - Where people will be booking venues for events/meetings*/

const Event = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Guests, setGuests] = useState('');
    const [Event, setEvent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} End Date: ${endDate} No. of Guests: ${Guests} Type of Event: ${Event}`);
    }
    return (
        <>
            <motion.div  
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}     
            >

                <h1 class="font-size">Event Booking</h1>

                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home active">Events</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>

                <div class="wrapper-Event">
                    <form onSubmit={handleSubmit}> {/*Form to book a venue*/}
                    <label><p className="contents">Starting Date: </p></label>
                        <DatePicker id="input"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <label><p className="contents">Ending Date: </p></label>
                        <DatePicker id="input"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                        />

                        <label>No. of Guests: </label>
                        <div>
                            <input type="text" value={Guests} onChange={(e) =>
                            setGuests(e.target.value)} class="input-box"/>
                        </div>

                        <label><p className="contents">Type of Event: </p></label>
                        <div>
                            <input type="text" value={Event} onChange={(e) =>
                            setEvent(e.target.value)} class="input-box"/>
                        </div>

                        <div className="Submit">
                        <Button className="btn" type="submit">Submit</Button>
                        </div>
                    </form>

                </div>
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