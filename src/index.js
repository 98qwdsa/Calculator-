import React from 'react';
import {render}  from 'react-dom';
import './index.css';
import Calculator from './Calculator';
// import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import calculator, { userInfo } from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd(action.type)
//     return result
// }

const store = createStore(combineReducers({ calculator, userInfo }), applyMiddleware(thunk, logger))

render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
