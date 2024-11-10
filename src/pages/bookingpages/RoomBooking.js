import React from 'react';
import './Booking.css'

const RoomBooking = () => {
    return (
        <div id = "BoxCard">
            <h1 id="Title">Room Booking Details</h1>
            {/*Insert Image here || <img id = "Imgcard" src={room.roomimage} alt={room.Name}/>*/}
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

            <button class="btn" id="BookingButtons">Confirm</button>
            <button class="btn" id="BookingButtons">Go back</button>
        </div>
    )
}

export default RoomBooking;