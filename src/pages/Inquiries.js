import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Inquiries = () => {
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`TItle: ${Title} & Description: ${Desc}`);
    }
    return (
        <>
            <motion.div
                
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}           

            >
                <h1 class="font-size">Inquiries/Reviews</h1>

                <Container fluid id="container">
                    <Row>
                        <Col xs={{ order: 'first'}}><Link to ="/" class="Text"><p class="Home">Home</p></Link></Col>
                        <Col xs={{ order: 'second'}}><Link to ="/Room" class="Text"><p class="Home">Room</p></Link></Col>
                        <Col xs={{ order: 'third' }}><Link to ="/Event" class="Text"><p class="Home">Events</p></Link></Col>
                        <Col xs={{ order: 'last' }}><Link to ="/Inquiries" class="Text"><p class="Home">Inquiries</p></Link></Col>
                    </Row>
                </Container>

                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                    </label>
                    <div class="input-box">
                        <input type="text" value={Title} onChange={(e) =>
                        setTitle(e.target.value)} />
                    </div>

                    <label>
                        Desctiption:
                    </label>
                    <div class="input-box">
                        <input type="text" value={Desc} onChange={(e) =>
                        setDesc(e.target.value)} />
                    </div>
                    

                    <Button type="submit" class="btn">Submit</Button>
                </form>

                <Outlet />

            </motion.div>
        
        </>
    )
}

export default Inquiries;