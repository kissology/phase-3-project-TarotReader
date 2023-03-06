import React from 'react';
import {useState} from 'react';
import Card from './Card';

function Home(){
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
    <div className="main" >
        <button onClick={(e) => {handleShuffle(e)}} className="button">Pick a Card</button>
        <Card 
        cards={cards}/>
    
    </div>

    );
}


export default Home;