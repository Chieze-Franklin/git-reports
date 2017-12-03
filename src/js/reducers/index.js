import {combineReducers} from 'redux';

import GithubReducer from './GithubReducer';

const reducers = combineReducers({
    github: GithubReducer
});

export default reducers;