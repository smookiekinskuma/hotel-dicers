import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../CSS/Room.css';


/*Comment*/

/*Room Booking - Where people will be booking rooms*/

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
                            <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Events</p></Link></Col>
                            <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                        </Row>
                    </Container>
                </div>
                

                <div class="wrapper"> {/*Form to book events*/}
                    <form onSubmit={handleSubmit}>
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

                        <label><p className="contents">No. of Guests: </p></label>
                        <div>
                            <input type="text" value={Guests} onChange={(e) =>
                            setGuests(e.target.value)} class="input-box"/>
                        </div>
                        
                        <div class="btn-css">
                        <Button className="btn" type="submit">Search for Available Rooms</Button>
                        </div>
                    </form>
                </div>
                <Outlet />

            </motion.div>
        </>
    )
}

export default Room;