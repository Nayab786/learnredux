import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {combineReducers, createStore} from 'redux';

import {incline,decline} from './redux/reducers';

const rootReducer = combineReducers({incline, decline});

console.log('rootReducer', rootReducer);

const store = createStore(rootReducer);

console.log('store', store);

console.log(store.getState())

store.dispatch({type:'increment'});
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);