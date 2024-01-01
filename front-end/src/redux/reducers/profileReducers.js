import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  //   profile: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // setProfile: (state, action) => {
    //   state.profile = action.payload;
    // },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
