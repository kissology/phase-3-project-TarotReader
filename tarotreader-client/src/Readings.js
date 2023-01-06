import React from 'react';
import ReadingList from './ReadingList';
import { Link } from "react-router-dom";


function Readings({readingData, onDeleteReading, onChangeComment}){
const renderReading = readingData.map(reading => { 
return <ReadingList
    key={reading.id}
    id={reading.id}
    user={reading.user.name}
    comments={reading.comments}
    onDeleteReading={onDeleteReading}
    onChangeComment={onChangeComment}
    />
})

    return (
        <div className="readings">
        <ul className="readings">
        {renderReading}
        </ul>
        <Link className="nav-link" to="/">
            HOME
        </Link>
        </div>
    )
}


export default Readings;