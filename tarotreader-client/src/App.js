import React, { useEffect, useState } from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Home';
import Readings from './Readings';
import Clients from "./Clients";
import Header from './Header';

function App() {
  const [readings, setReadings] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/readings")
       .then(response => response.json())
       .then(readings => setReadings(readings))
},[]);

function handleDeleteReading(id){
  const deleteReading = readings.filter((reading) => reading.id !== id)
  setReadings(deleteReading)
}

function addNewReading(e, newReading){
 e.preventDefault();

 let postRequest = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(newReading)
 }
 fetch("http://localhost:9292/readings", postRequest)
 .then(response => response.json())
 .then(newReading => setReadings([...readings, newReading]))
}

function handleUpdateComment(newComment){
  const updateComment = readings.map((reading) => {
    if(reading.comments === newComment.id) {
      return newComment
    } else {
      return reading
    }
  })
  setReadings(updateComment)
}

 return (

    <div className="App">
      <Header/>
      <Switch>

      <Route path="/Readings">
        <Readings 
        readingData={readings} 
        setReadings={setReadings}
        />
        </Route>

        <Route path="/Clients">
        <Clients/>
        </Route>

      <Route path="/">
        <Home 
        readingData={readings} 
        setReadings={setReadings}
        addNewReading={addNewReading}
        onDeleteReading={handleDeleteReading}
        onChangeComment ={handleUpdateComment}
        />
        </Route>

        
      </Switch>
    </div>

  );
}

export default App; 

