import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  id: localStorage.getItem("id") || null,
  user: null,
  profile: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    setId: (state, action) => {
      if (action.payload) {
        localStorage.setItem("id", action.payload);
      } else {
        localStorage.removeItem("id");
      }
      state.id = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setId, setUser, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
