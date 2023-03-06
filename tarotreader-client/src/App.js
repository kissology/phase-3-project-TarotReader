import React, { useEffect, useState } from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Home';
import Readings from './Readings';
import Clients from "./Clients";
import Header from './Header';

function App() {
  const [readings, setReadings] = useState([])
  const [clients, setClients] = useState([])


useEffect(() => {
    fetch("http://localhost:9292/readings")
       .then(response => response.json())
       .then(readings => setReadings(readings))
},[]);

useEffect(() => {
  fetch("http://localhost:9292/users")
     .then(response => response.json())
     .then(clients => setClients(clients))
},[]);

function addNewClient(e, newClient) {
  e.preventDefault();

  let postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(newClient),
  }
  fetch('http://localhost:9292/users', postRequest)
  .then(resp => resp.json())
  .then(newClient => setClients([...clients,newClient]))
}

function handleDeleteReading(id){
  const deleteReading = readings.filter((reading) => reading.id !== id)
  setReadings(deleteReading)
}

function handleUpdateComment(newComment){
  const updateComment = readings.map((reading) => {
    if(reading.id === newComment.id){
      return newComment
    } else {
      return reading
    }
  })
  setReadings(updateComment)
}
console.log(readings)
 return (

    <div className="App">
      <Header/>
      <Switch>

      <Route path="/readings">
        <Readings 
        readingData={readings} 
        setReadings={setReadings}
        onDeleteReading={handleDeleteReading}
        onChangeComment ={handleUpdateComment}
        />
        </Route>

        <Route path="/clients">
        <Clients clients={clients} addNewClient={addNewClient}/>
        </Route>

      <Route path="/">
        <Home 
        readingData={readings} 
        setReadings={setReadings}
        />
        </Route>

        
      </Switch>
    </div>

  );
}

export default App; 

