import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Room = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [Guests, setGuests] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Start Date: ${startDate} End Date: ${endDate} No. of Guests: ${Guests}`);
    }

    return (
        <>
            <h1 class="font-size">Room Booking</h1>

            <Container fluid id="container">
                <Row>
                    <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                    <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                    <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Events</p></Link></Col>
                    <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                </Row>
            </Container>
                <div class="wrapper">
                    <form onSubmit={handleSubmit}>
                        <label>Starting Date: </label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                        <label>Ending Date: </label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                        />

                        <label>No. of Guests: </label>
                        <div class="input-box">
                            <input type="text" value={Guests} onChange={(e) =>
                            setGuests(e.target.value)} />
                        </div>
                        

                        <Button className="btn" type="submit">Submit</Button>
                    </form>
                </div>
            <Outlet />
        </>
    )
}

export default Room;