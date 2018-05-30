import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
//import {createLogger} from 'redux-logger'; //Middleware to log errors and all

import allReducers from './../reducers/index';

// mount it on the Store
export default createStore(
    allReducers,
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
