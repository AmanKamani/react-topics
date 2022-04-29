import { combineReducers, Reducer } from "redux";
import { CakeActions } from "./cake/CakeActions";
import { cakeReducer } from "./cake/CakeReducer";
import AppState from "./state";
import { UserActions } from "./user/userActions";
import { UserReducer } from "./user/userReducer";

type AppActions = CakeActions | UserActions;

export const reducers:Reducer<AppState, AppActions> = combineReducers({
    cake: cakeReducer,
    users: UserReducer
});

export type CakeReducer = ReturnType<typeof reducers>;