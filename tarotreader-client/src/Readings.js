import React from 'react';
import ReadingList from './ReadingList';


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
        <ul style={{"width": "100%"}}className="readings">
        {renderReading}
        </ul>
        </div>
    )
}


export default Readings;