import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../CSS/LoginRegister.css"

/*Register Page*/

const Register = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RPassword, setRPassword] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Zip, setZip] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${Email} Password: ${Password} Repeated Password: ${RPassword} First Name: ${FName} Last Name: ${LName} Address: ${Address} City: ${City} Zip: ${Zip}`);
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
            >
                <h1>Register</h1>

                <>
                    <form id="LoginReviewform" onSubmit={handleSubmit}> {/*Form for registering*/}

                        {/*Account*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Email: </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Password: </Form.Label>
                            <Form.Control type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Repeat Password: </Form.Label>
                            <Form.Control type="password" placeholder="Repeat Password" value={RPassword} onChange={(e) => setRPassword(e.target.value)}/>
                            </Form.Group>

                        </Row>

                        {/*Full Name*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> First Name: </Form.Label>
                            <Form.Control placeholder="First Name" onChange={(e) => setFName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Last Name: </Form.Label>
                            <Form.Control placeholder="Last Name" onChange={(e) => setLName(e.target.value)}/>
                            </Form.Group>

                        </Row>

                        {/*Address*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" value={Address} onChange={(e) => setAddress(e.target.value)}/>
                            </Form.Group>

                        </Row>

                        {/*Address pt. 2*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">City</Form.Label>
                            <Form.Control placeholder="Main City" value={City} onChange={(e) => setCity(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Zip</Form.Label>
                            <Form.Control placeholder="1234" value={Zip} onChange={(e) => setZip(e.target.value)}/>
                            </Form.Group>

                        </Row>

                        <Button type="submit" className="btn">Submit</Button>                        
                        
                    </form>
                </>

            </motion.div>
        </>
    )
}

export default Register;