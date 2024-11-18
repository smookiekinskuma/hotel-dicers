import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../CSS/LoginRegister.css"

/*Register Page*/

const Register = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Zip, setZip] = useState('');
    const registerSubmit = (event) => {
        event.preventDefault();
        
        const registerData = {
            email: Email,
            password: Password,
            fName: FName,
            lName: LName,
            address: Address,
            city: City,
            zip: Zip,
            Role: "Guest"
        };
        console.log('Register Data:', registerData);

        fetch('http://localhost:5000/api/accounts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Account Created!');
            // Reset form fields
            setEmail('');
            setPassword('');
            setFName('');
            setLName('');
            setAddress('');
            setCity('');
            setZip('');
        })
        .catch(error => {
            console.error('Error submitting registration:', error);
            alert('There was a problem submitting your registration. Please try again later.');
        });
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
                    <form id="LoginReviewform" onSubmit={registerSubmit}> {/*Form for registering*/}

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

                        </Row>

                        {/*Full Name*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> First Name: </Form.Label>
                            <Form.Control placeholder="First Name" value={FName} onChange={(e) => setFName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Last Name: </Form.Label>
                            <Form.Control placeholder="Last Name" value={LName} onChange={(e) => setLName(e.target.value)}/>
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