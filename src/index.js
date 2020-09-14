import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
// import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux'
import calculator, { userInfo } from './reducers'

const store = createStore(combineReducers({calculator, userInfo}))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Calculator
        value={store.getState().calculator}
        changeEvalStr={(str) => store.dispatch({ type: 'CHANGE_EVAL_STR', str })}
        changeResult={(res) => store.dispatch({ type: 'CHANGE_RESULT_STR', res })}
        changeAll={(str, res) => store.dispatch({ type: 'CHANGE_EVAL_RESULT_STR', str, res })}
    />,
    rootEl
)

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
