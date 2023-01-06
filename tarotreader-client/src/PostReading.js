import React, { useState }from 'react';

function PostReading(props){

    // const [user, setUser] = useState("")
    // const [sign, setSign] = useState ("")
    // const [birthday, setBirthday] = useState("")
    const [comments, setComments] = useState ("")

    const newReading ={
        // user: user,
        // sign: sign,
        // birthday: birthday,
        comments: comments,
    }


    return (
        <div className="add-reading">
            <form onSubmit={ (e) => props.addNewReading(e, newReading)}className="comment-box" >
                {/* <input value={user} className="input" type="text" id="user" placeholder="Your Name" onChange={(e) => setUser(e.target.value)}/>
                <br></br>
                <input value={sign} className="input" type="text" id="sign" placeholder="Your Sign" onChange={(e) => setSign(e.target.value)}
                />
                <br></br>
                <input value={birthday} className="input" type="text" id="birthday" placeholder="Your Birthday" onChange={(e) => setBirthday(e.target.value)}/>
                <br></br> */}
                <input value={comments} className="input" type="text" id="comments" placeholder="Was this helpful?" onChange={(e) => setComments(e.target.value)}/>
                <br></br>
                <br></br>
                <button type="submit" className='save-button'>Save</button>
            </form>
        </div>
    )
}

export default PostReading;