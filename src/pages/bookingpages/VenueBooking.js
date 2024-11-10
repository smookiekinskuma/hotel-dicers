import { Link } from 'react-router-dom';
import React from 'react';
import './Booking.css'

const VenueBooking = () => {
    return (
        <div id = "Center">
            <div id = "BookingCard">
                <h1 id="Title">Venue Booking Details</h1>
                {/*Insert Image here || <img id = "BookingImgcard" src={room.roomimage} alt={room.Name}/>*/}
                <h3>Venue Details</h3>
                <p>Venue Name: </p>
                <p>Price: || Per Hour: </p>
                <h3>Client Details</h3>
                <p>Name: {/*Both First and Last Name*/}</p>
                <p>Email: </p>
                <p>Date: </p>
                <p>Starting Time: </p>
                <p>Ending Time: </p>
                <p>Type of Event: </p>
                <p>Additional Details: </p>
                <h3>Total Price</h3>
                <p>{/*Price*/}</p>

                <div class="parent">
                    <div class="div1"><Link className="Button" to ="/Venue">Confirm</Link></div>
                    <div class="div2"><Link className="Button" to ="/Venue">Cancel</Link></div>
                </div>

            </div>
        </div>

    )
}

export default VenueBooking;