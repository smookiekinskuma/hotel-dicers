// information:

// --------------------------------------------------------------------------
// NAVIGATION BAR:
// --------------------------------------------------------------------------
// -->"List-text" & "Logo-text" are located in App.css
// -->Try not to modify this file carelessly, it will have a breakdown.
// --------------------------------------------------------------------------
// CSS:
// --------------------------------------------------------------------------
// Use IDs to identify <div>'s as parent instead of child, this would prevent node errors.
// --------------------------------------------------------------------------
// HOW TO COMMENT INSIDE COMPONENTS, CLASSES, CONSTS & FUNCTION:
// --------------------------------------------------------------------------
// refer to line 42
// --------------------------------------------------------------------------
// End of Information

import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ProfilePicture from '../images/Logo2.png';
import '../CSS/Navbar.css';
import { useAuth } from '../context/AuthContext'; // Import useAuth

//The Top Bar
const Bar = () => {
    const [clicked, setClicked] = useState(false);
    const { user, logout } = useAuth(); // Get user from context

    console.log('User :', user);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLogout = () => {
        logout(); // Call the logout function
    };

    return (
        <>
            <div id="nav">
                <div id="parent-container">    
                    <li className="List-text"><Link to="/"><img className="profile-photo" src={ProfilePicture} alt="logo"/></Link></li>
                </div>

                <div id="parent-container">
                    <ul id="Navbar" className={clicked ? "#Navbar active" : "#Navbar"}>
                        <li className="active"></li>

                        {/* Show login and register links only if the user is not logged in */}
                        {!user && (
                            <>
                                <li><Link to="/Login" className="a">Login</Link></li>
                                <li><Link to="/Register" className="a">Register</Link></li>
                            </>
                        )}

                        {/* Only show Admin link if user role is Admin */}
                        {user && user.role === "Admin" && (
                            <li><Link to="/Admin" className="a admin">Admin</Link></li>
                        )}

                        {/* Show Logout button if user is logged in */}
                        {user && (
                            <li><Link to="/" onClick={handleLogout} className="a logout">Logout</Link></li>
                        )}
                    </ul>
                </div>   

                <div id="Hamburger" onClick={handleClick}>
                    <i id="Hambar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Bar;