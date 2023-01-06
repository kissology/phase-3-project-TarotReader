import React, {useState} from'react';

function ReadingList({ id, user, comments, onDeleteReading, onChangeComment}){
    const [updateComments, setUpdatedComments] = useState(comments)

function handleDeleteClick(e){
    e.preventDefault();
    fetch(`http://localhost:9292/readings/${id}`,
    {method: 'DELETE'}
    )

    onDeleteReading(id)
}

function handleSubmit(e){
    e.preventDefault()
    console.log(id)
    fetch(`http://localhost:9292/readings/${id}`,
    {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify ({comments: updateComments})
    })
    .then((resp) => resp.json())
    .then((updateComments) => {
        console.log(updateComments)
        onChangeComment(updateComments)
    })
}

return (
    <div className="reading-list">
        <li className="reading-list">
            <p>{user}</p>
            <p>"{comments}"</p>
            <form onSubmit={handleSubmit} >
            <input className="input" type="text" name="edit"  placeholder="Changed My Mind" onChange={(e) => setUpdatedComments(e.target.value)} />
            <br></br>
            <button onClick={handleSubmit} className="update-button" type="submit">Update</button>
            </form>
            <button onClick={handleDeleteClick} className="delete-button" > Delete </button>
        </li>
    </div>
    );
}

export default ReadingList;