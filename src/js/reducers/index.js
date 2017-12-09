import {combineReducers} from 'redux';

import GithubReducer from './GithubReducer';
import PrsReducer from './PrsReducer';

const reducers = combineReducers({
    github: GithubReducer,
    prs: PrsReducer
});

export default reducers;