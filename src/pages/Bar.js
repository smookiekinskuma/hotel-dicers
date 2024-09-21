import { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "../CSS/Navbar.css"

/*if you want to use a image, try to use this:

import ProfilePicture from '../images/image.png';
<Link to ="/"><img className="profile-photo" src={ProfilePicture} alt=""/></Link>

--------------------------------------------------------------------------

Important!

Please do not remove "<i className="active"></i>" this determines if the page is active or not. every page in the navigation is active but I only need one active className. This was my workaround -dani o7

To explain our navigation Bar:

-body/main can't be used inside of render since what we are calling are a class instead of consts, fortunately bar is nested in home so it's still reading the body css in that area.

-"List-text" & "Logo-text"is located in App.css, besides that mostly are in the Navbar.css
*/

class Bar extends Component {
    state = { clicked : false };
        handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
    
        return (
            <>
                <nav>
                    <li class="List-text"><Link to ="/" class="Logo-text">Hotel Dicers</Link></li>

                    <div>
                        <ul id="Navbar" className={this.state.clicked ? 
                            "#Navbar active" : "#Navbar"}>
                            <li className="active"></li> 
                            <li><Link to ="/Login" class="a">Login</Link></li>
                            <li><Link to ="/Register" class="a">Register</Link></li>
                            <li><Link to ="/Admin" class="a">Admin</Link></li>
                        </ul>
                    </div>   

                    <div id="Hamburger" onClick={this.handleClick}>
                        <i id="Hambar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
    
}

export default Bar;