import { Link, useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import './Booking.css'

const VenueBooking = () => {
    const location = useLocation();
    console.log('Location State:', location.state);

    //Check if location.state is null
    if (!location.state) {
        //Redirect to the Room page if no state is found
        return <Navigate to="/Venue" />;
    }

    const { venue, date, startTime, endTime, event, addDetails, user } = location.state;

    const calculateTotalHours = (start, end) => {
        const startHour = parseInt(start, 10);
        const endHour = parseInt(end, 10);

        //Handle cases where endTime is less than startTime (e.g., crossing midnight)
        if (endHour < startHour) {
            return (24 - startHour) + endHour;
        }
        return endHour - startHour;
    };

    const totalHours = calculateTotalHours(startTime, endTime);

    const totalPrice = ((totalHours - 1) * venue.PerHour + venue.Price);

    const handleConfirm = async () => {
        const bookingData = {
            VenueId: venue._id,
            AccountId: user._id,
            Date: new Date(date),
            starttime: startTime,
            endtime: endTime,
            totalHours: totalHours,
            EventType: event,
            AddDetails: addDetails,
            TotalPrice: totalPrice
        }

        console.log('Booking Data:', bookingData);

        try {
            const response = await fetch('http://localhost:5000/api/venuebooks/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Booking successful:', data);
            } else {
                const errorData = await response.json();
                console.error('Error booking room:', errorData);
                alert('Failed to book room. Please try again.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('There was a problem with the booking. Please try again later.');
        }
    };

    return (
        <div id = "Center">
            <div id = "BookingCard">
                <div id='centerDiv'>
                    <h2><b>Venue Booking Details</b></h2>
                    <img id="Imgcard" src={venue.venueimage} alt={venue.Name} />
                </div>

                <div id='centerDiv'>
                    <h3><b>Venue Details</b></h3>
                </div>
                <p><b>Venue Name:</b> {venue.Name}</p>
                <p><b>Price:</b> ${venue.Price} <b>||</b> <b>Per Hour:</b> ${venue.PerHour}</p>

                <div id='centerDiv'>
                    <h3><b>Client Details</b></h3>
                </div>
                <p><b>Name:</b> {user ? `${user.fName} ${user.lName}` : 'Not specified'}</p>
                <p><b>Email:</b> {user ? user.email : 'Not specified'}</p>
                <p><b>Date:</b> {date ? date.toLocaleDateString() : 'Not specified'}</p>
                <p><b>Starting Time:</b> {startTime}:00 <b>||</b> <b>Ending Time:</b> {endTime}:00</p>
                <p><b>Total Time:</b> {totalHours} hours</p>
                <p><b>Type of Event:</b> {event}</p>
                <p><b>Additional Details:</b> {addDetails}</p>
                
                <div id='centerDiv'>
                <h3><b>Total Price</b></h3>
                <h4>{totalHours > 0 ? `$${totalPrice}` : 'Price calculation not available'}</h4>
                </div>

                <div class="parent">
                    <div class="div1"><Link className="Button" to ="/Venue" onClick={handleConfirm}>Confirm</Link></div>
                    <div class="div2"><Link className="Button" to ="/Venue">Cancel</Link></div>
                </div>

            </div>
        </div>

    )
}

export default VenueBooking;