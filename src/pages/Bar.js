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

import { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ProfilePicture from '../images/Logo2.png';
import '../CSS/Navbar.css';

//The Top Bar

class Bar extends Component {
    state = { clicked : false };
        handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    
    render() {
        fetch('http://localhost:5000/accounts/:fname', {method: 'GET'})
        const firstName = '../component/LoginVerify/:firstName';
        return (
            <>
                <div id="nav">
                    <div id="parent-container">    
                        <li class="List-text"><Link to ="/"><img className="profile-photo" src={ProfilePicture} alt="logo"/></Link></li>
                    </div>

                    <div id="parent-container">
                        <ul id="Navbar" className={this.state.clicked ? 
                            "#Navbar active" : "#Navbar"}>
                            <li className="active"></li> {/*<-- DO NOT REMOVE --*/}
                            <li><Link to ="/Login" class="a login" id="Login">Login</Link></li>
                            <li><Link to ="/Register" class="a reg" id="Register">Register</Link></li>
                            {/*Separating Admin from the other two*/}
                            <li><Link to ="/Admin" class="a admin" id = 'Admin' hidden>Admin</Link></li>
                            <li class="a login" hidden>Welcome Back, {firstName} </li>
                        </ul>
                    </div>   

                    <div id="Hamburger" onClick={this.handleClick}> {/*Hamburger Bar that shows Login, Register, and Admin*/}
                        <i id="Hambar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
                <Outlet />
            </>
        )
    }
    
}

export default Bar;