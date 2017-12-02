import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Layout from './js/layouts/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
