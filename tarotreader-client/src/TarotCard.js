import React from 'react';
import{ useState } from 'react';

function TarotCard ({name, meaning, reading, image, imageback}){

    const [flipCard, setFlipCard] = useState(true);

function handleClick(e){
    e.preventDefault();
    setFlipCard(!flipCard);
}
    return(
        <li className="card">
            <h1>{name}</h1>
            <h2>Symbol of {meaning}</h2>
            <img onClick={(e) => handleClick(e)} src={ flipCard ? imageback : image} alt={name}>
            </img>
            <p>{reading}</p>
        </li>
    )
}

export default TarotCard;