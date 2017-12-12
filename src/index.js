import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

import './index.css';
import App from './js/layouts/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(<Provider store={store}>
        <div>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-left"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar/>
        </div>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
