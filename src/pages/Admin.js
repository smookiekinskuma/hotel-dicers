import './Page1.css';
import React from 'react';

import { Outlet, Link } from 'react-router-dom';

const Admin = () => {
    return (
        <>
        <h1>Admin Page</h1>

        <div>
            <ul>
                <li><Link to ="/Admin/Guest">Guest</Link></li>
                <li><Link to ="/Admin/Room">Room</Link></li>
                <li><Link to ="/Admin/Venue">Venue</Link></li>
                <li><Link to ="/Admin/Staff">Staff</Link></li>
                <li><Link to ="/Admin/Form">Form</Link></li>
                <li><Link to ="/Admin/Inbox">Inbox</Link></li>
            </ul>
        </div>
        

        <Outlet />
        </>
    )
}

export default Admin;