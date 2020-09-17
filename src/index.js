import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
// import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import calculator, { userInfo } from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';


// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd(action.type)
//     return result
// }

const store = createStore(combineReducers({ calculator, userInfo }), applyMiddleware(thunk, logger))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Calculator
        value={store.getState()}
        dispatch={store.dispatch}
        changeEvalStr={(str) => store.dispatch({ type: 'CHANGE_EVAL_STR', str })}
        changeResult={(res) => store.dispatch({ type: 'CHANGE_RESULT_STR', res })}
        changeAll={(str, res) => store.dispatch({ type: 'CHANGE_EVAL_RESULT_STR', str, res })}
    />,
    rootEl
)

render()
store.subscribe(render);
// console.log(server.getMyScore({ name: 'chunsen.zhao', email: "123123" }, { label: '数学', score: 70 }).then(data => {console.log(data)}));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
