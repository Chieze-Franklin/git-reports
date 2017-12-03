import ActionTypes from '../actions/ActionTypes';

export default (state = {name:null, type: null, repo:null, repos:null}, action) => {
    let newState = {...state};
    switch(action.type) {
        case ActionTypes.GITHUB_ACCOUNT_LOADED: {
            newState = {...action.payload};
            break;
        }
        case ActionTypes.GITHUB_ACCOUNT_LOADING: {
            newState.name = action.payload;
            break;
        }
        case ActionTypes.GITHUB_ACCOUNT_LOADING_FAILED: {
            newState = {...action.payload};
            break;
        }
        default:
            newState = state;
    }
    return newState;
}