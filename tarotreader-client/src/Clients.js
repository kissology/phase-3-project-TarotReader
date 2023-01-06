import React from "react";
import { Link } from "react-router-dom";
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
        <div>
        <Link className="nav-link-home" to="/">
            HOME
        </Link>
        <PostNewClient addNewClient={addNewClient}/>
        <ul className="cards">
        {clientData}
        </ul>
        </div>
    )
}

export default Clients;