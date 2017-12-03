import {createStore} from 'redux';

import reducers from './js/reducers/index';

const store = createStore(reducers, {});

export default store;