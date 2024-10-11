import React from 'react';
import './Boxes.css';

const VenueBox = ({ venue }) => {
    return (
    <div class = "Box">
        <img src={venue.venueimage} alt={venue.Name}/>
        <h3>{venue.Name} || Floor {venue.Floor}</h3>
        <p>{venue.Description}</p>
        <h4>Price: {venue.Price}</h4>
        <button class="btn">Book!</button>
    </div>
    )
}

export default VenueBox;