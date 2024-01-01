import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifikasi: [],
};

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    setNotif: (state, action) => {
      state.notifikasi = action.payload;
    },
  },
});

export const { setNotif } = notifSlice.actions;

export default notifSlice.reducer;
