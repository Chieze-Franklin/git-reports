import {combineReducers} from 'redux';

import GithubReducer from './GithubReducer';
import PrsReducer from './PrsReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const reducers = combineReducers({
    github: GithubReducer,
    prs: PrsReducer,
    toastr: toastrReducer
});

export default reducers;