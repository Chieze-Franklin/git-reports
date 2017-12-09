import ActionTypes from '../actions/ActionTypes';

export default (state = {name:null, repo:null, prs:null}, action) => {
    let newState = {...state};
    switch(action.type) {
        case ActionTypes.PRS_LOADED: {
            newState = {...action.payload};
            break;
        }
        case ActionTypes.PRS_LOADING: {
            newState = {...action.payload};
            break;
        }
    }
    return newState;
}