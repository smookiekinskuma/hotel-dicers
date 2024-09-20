import React, { useState } from 'react';

const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Email: ${Email} & Password: ${Password}`);
    }

    return (
        <>
        <h1>Login</h1>

        <>
        <form onSubmit={handleSubmit}>
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

        </>
    )
}

export default Login;