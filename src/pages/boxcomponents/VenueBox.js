import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Boxes.css';

const VenueBox = ({ venue, date, startTime, endTime, event, addDetails, user }) => {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate('/Venue/VenueBooking', {
            state: { 
                venue,
                date, 
                startTime, 
                endTime, 
                event,
                addDetails,
                user
            }
        });
    };

    return (
    <div id = "BoxCard">
        <h2>{venue.VenueType}</h2>
        <img id = "Imgcard" src={venue.venueimage} alt={venue.Name}/>
        <h3>{venue.Name} || Floor {venue.Floor}</h3>
        <p>{venue.Description}</p>
        <h4>Price: ${venue.Price} || Per hour: ${venue.PerHour}</h4>


        {user ? (
                <div id="ButtonSpace">
                    <button className="Button" onClick={handleBooking}>
                        Book this Venue
                    </button>
                </div>
            ) : (
                <p>Please log in to book this venue.</p>
            )}
    </div>
    )
}

export default VenueBox;