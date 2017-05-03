import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';

import {CitiesReducer} from "../reducers";



export let configure = () => {
    let reducer = combineReducers({
        cities: CitiesReducer
    });

    return createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ), applyMiddleware(promiseMiddleware));
};