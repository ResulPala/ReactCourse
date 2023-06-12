import * as actionTypes from '../actions/actionTypes'

const counterReducer = (state = 0, action) => {
    console.log(state);
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload);
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.MULTIPLY_BY_INPUT:
            return (newState = state * action.payload)
    
        default:
            return state;
    }
}

export default counterReducer;