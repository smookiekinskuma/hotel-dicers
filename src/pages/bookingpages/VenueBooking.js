import React from 'react';
import './Booking.css'

const VenueBooking = () => {
    return (
        <div id = "BoxCard">
            <h1 id="Title">Venue Booking Details</h1>
            {/*Insert Image here || <img id = "Imgcard" src={room.roomimage} alt={room.Name}/>*/}
            <h3>Venue Details</h3>
            <p>Venue Type: </p>
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

            <button class="btn" id="BookingButtons">Confirm</button>
            <button class="btn" id="BookingButtons">Go back</button>
        </div>
    )
}

export default VenueBooking;