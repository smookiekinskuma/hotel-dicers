import React, { useState } from 'react';
import { motion } from 'framer-motion';

/*Register Page*/

const Register = () => {
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [RPassword, setRPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`First Name: ${FName} Last Name: ${LName} Email: ${Email} Password: ${Password} Repeated Password: ${RPassword}`);
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
                    <form onSubmit={handleSubmit}> {/*Form for registering*/}
                        <label>First Name: </label>
                        <input type="text" value={FName} onChange={(e) =>
                        setFName(e.target.value)} />

                        <label>Last Name: </label>
                        <input type="text" value={LName} onChange={(e) =>
                        setLName(e.target.value)} />

                        <label>Email: </label>
                        <input type="text" value={Email} onChange={(e) =>
                        setEmail(e.target.value)} />

                        <label>
                            Password:
                        </label>
                        <input type="text" value={Password} onChange={(e) =>
                        setPassword(e.target.value)} />

                        <label>
                            Repeat Password:
                        </label>
                        <input type="text" value={RPassword} onChange={(e) =>
                        setRPassword(e.target.value)} />

                        <button type="submit">Submit</button>
                    </form>
                </>

            </motion.div>
        </>
    )
}

export default Register;