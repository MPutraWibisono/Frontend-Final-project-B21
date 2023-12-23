import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
