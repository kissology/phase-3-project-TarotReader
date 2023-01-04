import React from 'react';
import {useEffect, useState} from 'react';
import Card from './Card';

function Home(){
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/cards")
           .then(response => response.json())
           .then(cards => setCards(cards))
    },[]);



    return (
    <main>
        <Card 
        cards={cards}/>
    </main>

    );
}

export default Home;