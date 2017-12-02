import {combineReducers, createStore} from 'redux';

import GithubReducer from './reducers/GithubReducer';

const reducers = combineReducers({
    github: GithubReducer
});

const store = createStore(reducers, {});

export default store;