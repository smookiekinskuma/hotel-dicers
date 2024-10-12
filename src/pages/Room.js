import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../CSS/Room.css';

import RoomBox from './components/RoomBox';

/*Comment*/

/*Room Booking - Where people will be booking rooms*/

const Room = () => {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')  // Connect to backend API
          .then(response => response.json())
          .then(data => setRoom(data))
          .catch(error => console.error('Error fetching Rooms:', error));
    }, []);


    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Guests, setGuests] = useState('');
    const [Children, setChildren] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} End Date: ${endDate} No. of Guests: ${Guests} No. of Children: ${Children}`);
    }



    return (
        <> 
            {/*Copy w/ the curly braces*/}
            
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
            >
                <div id="header-room">{/*Id for parent*/}
                    <h1 class="font-room">Room Booking</h1>

                    <Container fluid id="container"> {/*Bar to access Home, Room, Event, and Inquiry*/}
                        <Row>
                            <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                            <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home active">Room</p></Link></Col>
                            <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Venue</p></Link></Col>
                            <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                        </Row>
                    </Container>
                </div>
                

                <div> {/*Form to book events*/}

                    <form id="Roomform" onSubmit={handleSubmit}>
                        {/*Full Name*/}
                        <Row className="mb-3">

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Starting Date: </Form.Label>
                        <DatePicker id="date-room" selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Ending Date: </Form.Label>
                        <DatePicker id="date-room" selected={endDate} onChange={(date) => setEndDate(date)}/>
                        </Form.Group>

                        </Row>

                        {/*Full Name*/}
                        <Row className="mb-3">

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Number of Guests: </Form.Label>
                        <Form.Select aria-label="Default select example" value={Guests} onChange={(e) => setGuests(e.target.value)}>
                            <option value="1 Guest">1 Guest</option>
                            <option value="2 Guests">2 Guests</option>
                            <option value="3 Guests">3 Guests</option>
                            <option value="4 Guests">4 Guests</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label id="label"> Number of Children: </Form.Label>
                        <Form.Select aria-label="Default select example" value={Children} onChange={(e) => setChildren(e.target.value)}>
                            <option value="1 Children">1 Children</option>
                            <option value="2 Children">2 Children</option>
                            <option value="3 Children">3 Children</option>
                            <option value="4 Children">4 Children</option>
                        </Form.Select>
                        </Form.Group>

                        </Row>
                        
                        <Button type="submit" class="btn">Search for Available Rooms</Button>
                    </form>

                </div>
                <Outlet />
                

                <h1>Available Rooms</h1>
                <>
                    {room.map(room => (
                        <RoomBox key={room.id} room={room}/>
                    ))}
                </>

            </motion.div>
        </>
    )
}

export default Room;