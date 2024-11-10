import { Link } from 'react-router-dom';
import React from 'react';
import './Boxes.css';

const VenueBox = ({ venue }) => {
    return (
    <div id = "BoxCard">
        <h2>{venue.VenueType}</h2>
        <img id = "Imgcard" src={venue.venueimage} alt={venue.Name}/>
        <h3>{venue.Name} || Floor {venue.Floor}</h3>
        <p>{venue.Description}</p>
        <h4>Price: {venue.Price} || Per hour: {venue.PerHour}</h4>

        <div id="ButtonSpace">
        <Link className="Button" to ="/Venue/VenueBooking">Book this Venue</Link>
        </div>
    </div>
    )
}

export default VenueBox;