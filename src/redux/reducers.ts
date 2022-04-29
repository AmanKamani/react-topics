import { combineReducers, Reducer } from "redux";
import { CakeActions } from "./cake/CakeActions";
import { cakeReducer } from "./cake/CakeReducer";
import AppState from "./state";


export const reducers:Reducer<AppState, CakeActions> = combineReducers({
    cake: cakeReducer
});

export type CakeReducer = ReturnType<typeof reducers>;