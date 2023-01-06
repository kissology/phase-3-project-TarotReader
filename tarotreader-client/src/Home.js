import React from 'react';
import {useState} from 'react';
import Card from './Card';
import PostReading from './PostReading';

function Home({addNewReading}){
    const [show, setShow] = useState(false)
    const [cards, setCards] = useState([])


   function fetchCards () {
        fetch("http://localhost:9292/cards")
           .then(response => response.json())
           .then(cards => {setCards(cards)
        setShow(true);
        }
           )
    }


function handleShuffle(e){
    e.preventDefault();
    if(show === false){
        fetchCards()
    } else {
    const shuffledCards = [...cards]
    .sort(() => Math.random() - 0.5)

    setCards(shuffledCards)
    }
    
   }
   

   return (
    <main class="wrapper" className="main">
        <button onClick={(e) => {handleShuffle(e)}} className="button">Pick a Card</button>
        <Card 
        cards={cards}/>
        <PostReading addNewReading={addNewReading}/>
    
    </main>

    );
}


export default Home;