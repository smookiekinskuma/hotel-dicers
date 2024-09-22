import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* Admin Page - Admins have access to all information such as clients, booking, etc. */

const Admin = () => {
    return ( 
        <>
            <motion.div>
                <h1>Admin Page</h1>

                <div> {/*Bar for accessing different bookings/lists*/}
                    <ul>
                        <li><Link to ="/Admin/Guest">Guest</Link></li> {/* Guest booking */}
                        <li><Link to ="/Admin/Room">Room</Link></li> {/* Room booking */}
                        <li><Link to ="/Admin/Venue">Venue</Link></li> {/* Venue booking */}
                        <li><Link to ="/Admin/Staff">Staff</Link></li> {/* Staff list */}
                        <li><Link to ="/Admin/Form">Form</Link></li> {/* Form list */}
                        <li><Link to ="/Admin/Inbox">Inbox</Link></li> {/* Inbox list */}
                    </ul>
                </div>

                <Outlet />
            </motion.div>
        </>
    )
}

export default Admin;