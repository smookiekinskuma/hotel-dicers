import React from 'react';
import './Boxes.css';

function EventBox(props){
    return (
    <div class = "Box">
        <img src={props.EventImage}></img>
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
        <p>Maximum number of guests allowed: {props.GuestNo}</p>
        <button class="btn">Book!</button>
    </div>
    )
}

export default EventBox;