import React from 'react';
import './Boxes.css';

const VenueBox = ({ venue }) => {
    return (
    <div class = "Box">
<<<<<<< Updated upstream
        <img src={props.EventImage}></img>
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
        <p>Maximum number of guests allowed: {props.GuestNo}</p>
=======
        <img src={venue.venueimage} alt={venue.Name}/>
        <h3>{venue.Name} || Floor {venue.Floor}</h3>
        <p>{venue.Description}</p>
        <h4>Price: {venue.Price}</h4>
>>>>>>> Stashed changes
        <button class="btn">Book!</button>
    </div>
    )
}

export default VenueBox;