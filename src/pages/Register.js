import React, { useState } from 'react';

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
        <h1>Register</h1>

        <>
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
            </label>
            <input type="text" value={FName} onChange={(e) =>
            setFName(e.target.value)} />

            <label>
                Last Name:
            </label>
            <input type="text" value={LName} onChange={(e) =>
            setLName(e.target.value)} />

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

            <label>
                Repeat Password:
            </label>
            <input type="text" value={RPassword} onChange={(e) =>
            setRPassword(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
        </>
        </>
    )
}

export default Register;