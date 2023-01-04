import React from'react';
import TarotCard from "./TarotCard";

function Card ({cards}) {
    const tarotCards = cards.map((tarotCards) => {
        return <TarotCard
            key={tarotCards.id}
            name={tarotCards.name}
            meaning={tarotCards.meaning}
            reading={tarotCards.reading}
            image={tarotCards.img}
            />
    })

    return (
       <ul className="cards">
        <img src={require('./Tarotback.png')} className ="tarotback" alt="tarotback" />
        {tarotCards}
        </ul>
    )
}

export default Card;