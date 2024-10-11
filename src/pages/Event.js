<<<<<<< Updated upstream
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
=======
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
>>>>>>> Stashed changes
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../CSS/Event.css"

import VenueBox from './components/EventBox';

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
                <div id="header-venue">
                <h1 class="font-venue">Venue Booking</h1>

                <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home active">Events</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>
                </div>

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
<<<<<<< Updated upstream

                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
                <EventBox EventImage="/images/SUBSTITUTE.png" Name="Name" Description="Sample Venue" GuestNo="100"/>
=======
                <>
                    {venue.map(venue => (
                        <VenueBox key={venue.id} venue={venue}/>
                    ))}
                </>
>>>>>>> Stashed changes
                                
            </motion.div>
        </>
    )
}

export default Event;