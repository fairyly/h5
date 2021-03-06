import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import 'normalize.css';
import store from './store';
import './common/main.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
        </Router>
    </Provider>,
    document.getElementById('content')
);
