import React from "react";
import ClientCard from './ClientCard';
import PostNewClient from "./PostNewClient";

function Clients({clients, addNewClient}){
 const clientData = clients.map((client) => {
    return <ClientCard
    key={client.id}
    name={client.name}
    birthdate={client.birthdate}
    sign={client.sign}
    addNewClient={addNewClient}
    />
 })
  
    return (
        <div className="client-div">
        <PostNewClient addNewClient={addNewClient}/>
        <ul className="cards">
        {clientData}
        </ul>
        </div>
    )
}

export default Clients;