import * as redux from 'redux';
import { notesReducer } from './notes-reducers';

export const init = () =>{

    const reducer = redux.combineReducers({
        notes: notesReducer
    })

    const store = redux.createStore(reducer)
    return store
}