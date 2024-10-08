import React from 'react';
import './Boxes.css';

function RoomBox(props){
    return (
    <div class = "Box">
        <img src={props.RoomImage}></img>
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
        <p>Maximum number of guests allowed: {props.GuestNo}</p>
        <p>{props.BedNo} {props.BedType}</p>
        <button>Book!</button>
    </div>
    )
}

export default RoomBox;