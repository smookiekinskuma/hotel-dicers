import React from 'react';
import './App.css';

function Box(props){
    return (
    <div class = "card">
        <h1>{props.name}</h1>
        <p>{props.image}</p>
    </div>
    )
}

export default Box;