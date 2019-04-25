import {FETCH_NOTES} from './types'
const notes = [{ "title": "My second notes", "body": "My notes body" },
{ "title": "My second notes", "body": "My notes body" },
{ "title": "My second notes", "body": "My notes body" },
{ "title": "My second notes", "body": "My notes body" }]

export const fetchNotes = ()=>{
    return {
        type: FETCH_NOTES,
        notes: notes // we can notes only since key and value are same
    }
}