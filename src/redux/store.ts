import { applyMiddleware, createStore } from "redux";
import { cakeReducer } from "./cake/CakeReducer";
import { reducers } from "./reducers";
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(logger, thunk)
));




export default store;