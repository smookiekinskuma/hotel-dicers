import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../CSS/LoginRegister.css"

/*Register Page*/

const Register = () => {
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        Rpassword: '',
        fName: '',
        lName: '',
        address: '',
        city: '',
        zip: '',
        Role: 'Guest'
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const registerChange = (event) => {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value
        });
    };

    const registerSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const { email, password, Rpassword, fName, lName, address, city, zip, Role } = registerData;

        //Repeating password
        if (password !== Rpassword) {
            setError('Password and Repeat Password do not match');
            return;
        }

        // Validation
        if (!email || !password || !Rpassword || !fName || !lName || !address || !city || !zip) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/accounts/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });

            const data = await res.json();

            if (res.ok) {
                // Store additional user information in local storage
                localStorage.setItem('token', data.token);
                localStorage.setItem('userFName', data.fName);
                localStorage.setItem('userLName', data.lName);
                localStorage.setItem('userEmail', data.email);
                localStorage.setItem('userRole', data.role);
                localStorage.setItem('userId', data._id); // Store the _id here
                setSuccess('Registration Successful! Redirecting to login...');
                setTimeout(() => {
                    navigate('/login'); // Redirecting to login page
                }, 2000);
            } else {
                setError(data.msg || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1 }}
                exit={{opacity: 0}}
            >
                <h1>Register</h1>
                {error && 
                <div id="Status"><h4 id="StatusText" style={{ color: '#31081f' }}>{error}</h4></div>}
                {success && 
                <div id="Status"><h4 id="StatusText" style={{ color: 'green' }}>{success}</h4></div>}

                <>
                    <form id="LoginReviewform" onSubmit={registerSubmit}> {/*Form for registering*/}

                        {/*Account*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Email: </Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                name="email"
                                value={registerData.email} 
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Password: </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={registerData.password} 
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Repeat Password: </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="Rpassword"
                                value={registerData.Rpassword} 
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                        </Row>

                        {/*Full Name*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> First Name: </Form.Label>
                            <Form.Control 
                                placeholder="First Name" 
                                value={registerData.fName} 
                                name="fName"
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Last Name: </Form.Label>
                            <Form.Control 
                                placeholder="Last Name" 
                                value={registerData.lName} 
                                name="lName"
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                        </Row>

                        {/*Address*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Address</Form.Label>
                            <Form.Control 
                                placeholder="1234 Main St" 
                                value={registerData.address} 
                                name="address"
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                        </Row>

                        {/*Address pt. 2*/}
                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">City</Form.Label>
                            <Form.Control 
                                placeholder="Main City" 
                                value={registerData.city} 
                                name="city"
                                onChange={registerChange} 
                                required
                            />
                            </Form.Group>

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Zip</Form.Label>
                            <Form.Control 
                                placeholder="1234" 
                                value={registerData.zip} 
                                name="zip"
                                onChange={registerChange} 
                                required
                            />
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

//I also died inside here.
// - Nicaia