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
        <h4>Price: {room.Price}</h4>
        <h5>Per night: {room.PerNight}</h5>

        <button class="btn">Book!</button>
    </div>
    )
}

export default RoomBox;