import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Boxes.css';

const RoomBox = ({ room, startDate, endDate, numberOfGuests, numberOfChildren, roomDesc, user }) => {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate('/Room/RoomBooking', {
            state: { 
                room, 
                startDate, 
                endDate, 
                numberOfGuests,
                numberOfChildren,
                roomDesc,
                user,
                //to calculate the price
                roomPrice: room.Price, 
                perNightPrice: room.PerNight
            }
        });
    };
    
    return (
        <div id="BoxCard">
            <img id="Imgcard" src={room.roomimage} alt={room.Name} />
            <h3>{room.Name} || {room.Room}</h3>
            <p>{room.Description}</p>
            <p>Maximum number of guests allowed: {room.GuestCap}</p>
            <p>{room.BedNo} {room.BedType}</p>
            <h4>Price: {room.Price} || Per night: {room.PerNight}</h4>

            <div id="ButtonSpace">
                <button className="Button" onClick={handleBooking}>
                    Book this Room
                </button>
            </div>
        </div>
    );
};

export default RoomBox;