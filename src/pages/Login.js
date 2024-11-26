import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Col, Form, Row } from 'react-bootstrap';
import "../CSS/LoginRegister.css"

/*Login Page*/

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
      });
    
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
      const navigate = useNavigate();
    
      const loginChange = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value
        });
      };
    
      const loginSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        const { email, password } = loginData;
    
        // Basic validation
        if (!email || !password) {
          setError('Please enter all fields');
          return;
        }
    
        try {
          const res = await fetch('http://localhost:5000/api/accounts/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
    
          const data = await res.json();
          console.log('Login response:', data);
    
          if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userFName', data.fName); // Store first name
            localStorage.setItem('userLName', data.lName); // Store last name
            localStorage.setItem('userEmail', data.email); // Store email
            localStorage.setItem('userRole', data.role); // Store email
            setSuccess('Login successful! Redirecting...');
            setTimeout(() => {
              navigate('/'); // Redirect to homepage
            }, 2000);
          } else {
            setError(data.msg || 'Login failed. Please try again.');
          }
        } catch (err) {
          setError('An error occurred. Please try again.');
        }
      };

    return (
        <html>
            <main>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1 }}
                    exit={{opacity: 0}}
                >

                    <h1>Login</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                        <Form id="LoginReviewform" onSubmit={loginSubmit} className="Log-Form"> {/*Form for logging in*/}

                        <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Email:</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            value={loginData.email}
                            onChange={loginChange}
                            required
                            />
                        </Form.Group>
                        </Row>

                        <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label id="LoginReviewlabel">Password</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            value={loginData.password}
                            onChange={loginChange}
                            required
                            />
                        </Form.Group>
                        </Row>

                            <Button type="submit" className="btn">Submit</Button>
                            
                        </Form>
                </motion.div>
                
            </main>
        </html>
    )
}

export default Login;