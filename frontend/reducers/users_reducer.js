import {RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash/merge';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let currentUser = { [action.currentUser.id] : action.currentUser };
            newState = Object.assign({}, state, currentUser);
            return newState;
        default:
            return state;
    }
}

export default usersReducer;