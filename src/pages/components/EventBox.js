import React from 'react';
import './Boxes.css';

function EventBox(props){
    return (
    <div class = "Box">
        <img src={props.EventImage}></img>
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
        <h4>Price: {props.Price}</h4>
        <button class="btn">Book!</button>
    </div>
    )
}

export default EventBox;