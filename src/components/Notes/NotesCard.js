import React from 'react';
import { Link } from 'react-router-dom';

export function NotesCard(props) {
    // debugger; 
    return (
        <div className={props.colNum}>
            {/* instead of a tag we should use link, because SPA should not send 
        request to user, they should load data dynamically  */}
            {/* <a href="/view-note/askas"> */}
            <Link to="/view-note/asa"> {/* we can give to={`/view-notes/${props.note.id}` */}
                <div className='card bwm-card'>
                    <img className='card-img-top' src='http://via.placeholder.com/350x250' alt=''></img>
                    <div className='card-block'>
                        <h6 className='card-subtitle'>{props.note.body} &#183; Note Status</h6>
                        <h4 className='card-title'>{props.note.title}</h4>
                        <p className='card-text'>Time - &#183; Alarm - Yes/No</p>
                        <a href="./src/" className='card-link'>Created At: </a>
                    </div>
                </div>
                {/* </a> */}
            </Link>
        </div>
    )
}