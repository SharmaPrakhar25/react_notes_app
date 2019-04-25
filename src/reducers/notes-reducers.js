import {FETCH_NOTES} from '../actions/types'

const INITIAL_STATE = {
    data:[]
}

export const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NOTES:
        return {...state,data:action.notes}
        
        default:
            return state
    }
}