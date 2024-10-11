import React from 'react';
import './Boxes.css';

const VenueBox = ({ venue }) => {
    return (
    <div id = "BoxCard">
        <img id = "Imgcard" src={venue.venueimage} alt={venue.Name}/>
        <h3>{venue.Name} || Floor {venue.Floor}</h3>
        <p>{venue.Description}</p>
        <h4>Price: {venue.Price}</h4>
        <h5>Per hour: {venue.PerHour}</h5>
        <button class="btn">Book!</button>
    </div>
    )
}

export default VenueBox;