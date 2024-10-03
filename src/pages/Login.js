import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import "../CSS/Login.css";
/*Login Page*/

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${Email} & Password: ${Password}`);
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

                    <>
                        <form onSubmit={handleSubmit} className="Log-Form"> {/*Form for logging in*/}
                            <label>
                                <p className="contents">Email:</p>
                            </label>
                            <input type="text" value={Email} onChange={(e) =>
                            setEmail(e.target.value)} class="input-box control"/>

                            <label>
                                <p className="contents">Password:</p>
                            </label>
                            <input type="text" value={Password} onChange={(e) =>
                            setPassword(e.target.value)} class="input-box control"/>
                            <div class="btn-css Login-btn">
                            <Button className="btn" type="submit">Login</Button>
                            </div>
                        </form>
                    </>
                </motion.div>
                
            </main>
        </html>
    )
}

export default Login;