import { createStore } from "redux";
import { cakeReducer } from "./cake/CakeReducer";
import { reducers } from "./reducers";


const store = createStore(reducers);

export default store;