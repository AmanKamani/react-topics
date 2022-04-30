import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { incrementCount } from "./counter/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type AppState = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch

export default store;