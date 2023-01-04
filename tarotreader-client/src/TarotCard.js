import React from'react';

function TarotCard ({name, meaning, reading, image}){

    return(
        <li className="card">
            <h1>{name}</h1>
            <h2>{name} is the symbol of {meaning}</h2>
            <img src={image} alt={name} />
            <p>{reading}</p>
        </li>
    )
}

export default TarotCard;