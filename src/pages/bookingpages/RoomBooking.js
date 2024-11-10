import { Link } from 'react-router-dom';
import React from 'react';
import './Booking.css'

const RoomBooking = () => {
    return (
        <div id = "Center">
            <div id = "BookingCard">
                <h1 id="Title">Room Booking Details</h1>
                <h3>Room Details</h3>
                <p>Room Name: || {/*Room Floor/Number*/}</p>
                <p>Price: || Per Night: </p>
                <h3>Client Details</h3>
                <p>Name: {/*Both First and Last Name*/}</p>
                <p>Email: </p>
                <p>Check-In: </p>
                <p>Check-Out: </p>
                <p>Number of Guests: </p>
                <p>Number of Children: </p>
                <p>Additional Details: </p>
                <h3>Total Price</h3>
                <p>{/*Price*/}</p>

                <div class="parent">
                    <div class="div1"><Link className="Button" to ="/Room">Confirm</Link></div>
                    <div class="div2"><Link className="Button" to ="/Room">Cancel</Link></div>
                </div>
                
            </div>
        </div>
        
    )
}

export default RoomBooking;