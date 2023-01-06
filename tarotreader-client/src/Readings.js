import React from 'react';
import ReadingList from './ReadingList';
import { Link } from "react-router-dom";


function Readings({readingData, onDeleteReading, onChangeComment}){
console.log(readingData);
const renderReading = readingData.map(reading => { 
return <ReadingList
    key={reading.id}
    id={reading.user.id}
    user={reading.user.name}
    sign={reading.user.sign}
    birthday={reading.user.birthdate}
    comments={reading.comments}
    onDeleteReading={onDeleteReading}
    onChangeComment={onChangeComment}
    />
})

    return (
        <div className="readings">
        <Link className="nav-link" to="/">
            HOME
        </Link>
        <ul className="readings">
        {renderReading}
        </ul>
        </div>
    )
}


export default Readings;