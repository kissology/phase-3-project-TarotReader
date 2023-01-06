import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientCard from './ClientCard';

function Clients(){

const [clients, setClients] = useState([])



    useEffect(() => {
        fetch("http://localhost:9292/users")
           .then(response => response.json())
           .then(clients => setClients(clients))
           console.log(clients)
           
    },[]);
    

    
    return (
        <div>
        <Link className="nav-link-home" to="/">
            HOME
        </Link>
        <ClientCard/>
        </div>
    )
}

export default Clients;