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
            imageback={tarotCards.back}
            />
    })


    return (
       <ul className="cards">
        {tarotCards[0]}
        </ul>
    )
}

export default Card;