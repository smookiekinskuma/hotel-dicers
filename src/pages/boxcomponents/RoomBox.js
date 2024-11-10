import { Link } from 'react-router-dom';
import React from 'react';
import './Boxes.css';

const RoomBox = ({ room }) => {
    return (
    <div id = "BoxCard">
        <img id = "Imgcard" src={room.roomimage} alt={room.Name}/>
        <h3>{room.Name} || {room.Room}</h3>
        <p>{room.Description}</p>
        <p>Maximum number of guests allowed: {room.GuestCap}</p>
        <p>{room.BedNo} {room.BedType}</p>
        <h4>Price: {room.Price} || Per night: {room.PerNight}</h4>

        <div id="ButtonSpace">
        <Link className="Button" to ="/Room/RoomBooking">Book this Room</Link>
        </div>
    </div>
    )
}

export default RoomBox;