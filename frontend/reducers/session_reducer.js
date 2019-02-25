import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { currentUser: null };
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.currentUser.id;
            debugger
            // return newState;
            return state;
        case LOGOUT_CURRENT_USER:
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;