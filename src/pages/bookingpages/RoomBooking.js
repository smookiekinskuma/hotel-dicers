import { Link, useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import './Booking.css';

const RoomBooking = () => {
    const location = useLocation();
    console.log('Location State:', location.state);

    //Check if location.state is null
    if (!location.state) {
        //Redirect to the Room page if no state is found
        return <Navigate to="/Room" />;
    }

    const { room, startDate, endDate, numberOfGuests, numberOfChildren, AddDetails, user, roomPrice, perNightPrice } = location.state;

    //Calculate total price
    const totalNights = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const differenceInTime = end.getTime() - start.getTime();
            return Math.ceil(differenceInTime / (1000 * 3600 * 24));
        }
        return 0; //Return 0 if dates are not specified
    };

    //Calculating stuff n all
    const totalNightsCount = totalNights();
    const totalPrice = roomPrice + (totalNightsCount * perNightPrice);
    const totalNightsCountOverall = (totalNightsCount + 1);

    const handleConfirm = async () => {
        const bookingData = {
            RoomId: room._id,
            AccountId: user._id,
            start: new Date(startDate),
            end: new Date(endDate),
            totalNightsCountOverall: totalNightsCountOverall,
            NoGuests: numberOfGuests,
            NoKids: numberOfChildren,
            AddDetails: AddDetails,
            TotalPrice: totalPrice
        };

        console.log('Booking Data:', bookingData);

        try {
            const response = await fetch('http://localhost:5000/api/roombooks/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Booking successful:', data);
                //Optionally, redirect to a confirmation page or show a success message
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
        <div id="Center">
            <div id="BookingCard">
                <div id='centerDiv'>
                <h2><b>Room Booking Details</b></h2>
                <img id="Imgcard" src={room.roomimage} alt={room.Name} />
                </div>

                <div id='centerDiv'>
                <h3><b>Room Details</b></h3>
                </div>
                <p><b>Room Name:</b> {room.Name} <b>||</b> {room.Room}</p>
                <p><b>Price:</b> ${room.Price} <b>||</b> <b>Per Night:</b> ${room.PerNight}</p>
                
                <div id='centerDiv'>
                <h3><b>Client Details</b></h3>
                </div>
                <p><b>Name:</b> {user ? `${user.fName} ${user.lName}` : 'Not specified'}</p>
                <p><b>Email:</b> {user ? user.email : 'Not specified'}</p>
                <p><b>Check-In:</b> {startDate ? startDate.toLocaleDateString() : 'Not specified'} <b>||</b> <b>Check-Out:</b> {endDate ? endDate.toLocaleDateString() : 'Not specified'}</p>
                <p><b>Number of days total:</b> {totalNightsCountOverall} days</p>
                <p><b>Number of Guests:</b> {numberOfGuests || 'Not specified'} <b>||</b> <b>Number of Children:</b> {numberOfChildren || '0'}</p>
                <p><b>Additional Details:</b> {AddDetails || 'No details added.'}</p>
                
                <div id='centerDiv'>
                <h3><b>Total Price</b></h3>
                <h4>{totalPrice > 0 ? `$${totalPrice}` : 'Price calculation not available'}</h4>
                </div>

                <div className="parent">
                    <div className="div1"><Link className="Button" to="/Room" onClick={handleConfirm}>Confirm</Link></div>
                    <div className="div2"><Link className="Button" to="/Room">Cancel</Link></div>
                </div>
            </div>
        </div>
    );
};

export default RoomBooking;