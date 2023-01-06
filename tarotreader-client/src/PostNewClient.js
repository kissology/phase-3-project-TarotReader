import React, {useState} from "react";

function PostNewClient (props){
    const [name, setName] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [sign, setSign] = useState("")

    const newClient = {
        name: name,
        birthdate: birthdate,
        sign: sign,
    }

    return (
        <form onSubmit={(e)=> props.addNewClient(e, newClient)} className="client-form">
            <input  value={name} type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input  value={birthdate} type="text" id="name" placeholder="Birthday" onChange={(e) => setBirthdate(e.target.value)}/>
            <input  value={sign} type="text" id="name" placeholder="Sign" onChange={(e) => setSign(e.target.value)}/>
            <button className="button-join" type="submit">Join</button>
        </form>
    )
}

export default PostNewClient