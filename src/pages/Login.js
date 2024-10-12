import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AdminCheck from '../component/AdminCheck';
import LoginCheck from '../component/LoginVerify';
import "../CSS/LoginRegister.css"

/*Login Page*/

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = (event) => {
        fetch('http://localhost:5000/accounts', {method: 'GET'})
            .then(response => AdminCheck.json())
            .then(response => LoginCheck.json());
    }

    return (
        <html>
            <main>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1 }}
                    exit={{opacity: 0}}
                >

                    <h1>Login</h1>

                        <form id="LoginReviewform" onSubmit={handleSubmit} className="Log-Form"> {/*Form for logging in*/}

                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Email: </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">

                            <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel"> Password: </Form.Label>
                            <Form.Control type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                        </Row>

                            <Button type="submit" className="btn">Submit</Button>
                            
                        </form>
                </motion.div>
                
            </main>
        </html>
    )
}

export default Login;