import React from 'react';
import { Link } from 'react-router-dom';
import './Boxes.css';

const RoomBox = ({ room }) => {
    return (
    <div class = "Box">
        <img src={room.roomimage} alt={room.Name}/>
        <h3>{room.Name} || {room.Room}</h3>
        <p>{room.Description}</p>
        <p>Maximum number of guests allowed: {room.GuestCap}</p>
        <p>{room.BedNo} {room.BedType}</p>
        <h4>Price: {room.Price}</h4>
        <button class="btn">Book!</button>
    </div>
    )
}

export default RoomBox;