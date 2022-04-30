import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserState{
    loading: boolean;
    users: [];
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    users: [],
    error: null
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    await new Promise(r => setTimeout(r, 2000));
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: { },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state, action: PayloadAction<void>) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<[]>) => {
                state.loading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            })
    }
});

export default userSlice.reducer;