import { applyMiddleware, createStore } from "redux";
import { cakeReducer } from "./cake/CakeReducer";
import { reducers } from "./reducers";
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(logger)
));

export default store;