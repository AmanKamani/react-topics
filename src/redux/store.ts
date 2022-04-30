import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counter/counterSlice";
import userReducer from "./users/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(logger);
    },
    devTools: true // bydefault it is true.
});

export type AppState = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch

export default store;