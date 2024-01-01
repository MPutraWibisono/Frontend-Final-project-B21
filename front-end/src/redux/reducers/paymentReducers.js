import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setOrder } = paymentSlice.actions;

export default paymentSlice.reducer;
