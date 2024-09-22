import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
                        <form onSubmit={handleSubmit}> {/*Form for logging in*/}
                            <label>
                                Email:
                            </label>
                            <input type="text" value={Email} onChange={(e) =>
                            setEmail(e.target.value)} />

                            <label>
                                Password:
                            </label>
                            <input type="text" value={Password} onChange={(e) =>
                            setPassword(e.target.value)} />
                            <button type="submit">Submit</button>
                        </form>
                    </>
                </motion.div>
                
            </main>
        </html>
    )
}

export default Login;