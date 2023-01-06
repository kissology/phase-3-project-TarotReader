import React from'react';

function ClientCard({name, birthdate, sign}){


return (
        
            <li className="client-card">
            <h2>{name}</h2>
            <h2>{birthdate}</h2>
            <h2>{sign}</h2>
            </li>
     
    )
}

export default ClientCard;
