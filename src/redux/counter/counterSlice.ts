import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState{
    count: number;
    interval: number;
}

const initialState: CounterState = {
    count: 0,
    interval: 1
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        incrementCount(state: CounterState, action: PayloadAction<void>){
            state.count += state.interval;
        },
        decrementCount(state: CounterState, action: PayloadAction<void>){
            state.count -= state.interval;
        },
        reset(state, action: PayloadAction<void>){
            state.count = initialState.count;
            state.interval = initialState.interval;
        },
        changeInterval(state: CounterState, action: PayloadAction<number>){
            state.interval = action.payload;
        }
    }
});

export const { incrementCount, decrementCount, reset, changeInterval } = counterSlice.actions;
export default counterSlice.reducer;