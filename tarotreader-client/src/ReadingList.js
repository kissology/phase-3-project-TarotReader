import React, {useState} from'react';

function ReadingList({ id, user, comments, birthday, sign, onDeleteReading, onChangeComment}){
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
        onChangeComment(updateComments)
    })
}

return (
    <div className="reading-list">
        <li className="reading-list">
            <p>{user}</p>
            <p>Sign: {sign}</p>
            <p>Birthday: {birthday}</p>
            <p>How was your reading? <br></br><br></br> {comments}</p>
            <form onSubmit={handleSubmit} >
            <input className="input" type="text" name="edit"  placeholder="Changed My Mind" onChange={(e) => setUpdatedComments(e.target.value)} />
            </form>
            <button className="update-button" type="submit" value={updateComments}>Update</button>
            <button onClick={handleDeleteClick} className="delete-button" value={onDeleteReading}> Delete </button>
        </li>
    </div>
    );
}

export default ReadingList;