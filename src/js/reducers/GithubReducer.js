import ActionTypes from '../actions/ActionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.GITHUB_ACCOUNT_LOADED: {
            state = {...state, name: action.payload};
            break;
        }
        case ActionTypes.GITHUB_ACCOUNT_LOADING: {
            state = {...state, name: action.payload};
            break;
        }
        case ActionTypes.GITHUB_ACCOUNT_LOADING_FAILED: {
            state = {...state, error: action.payload};
            break;
        }
    }
    return state;
}