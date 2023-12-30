import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  pay: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setPay: (state, action) => {
      state.pay = action.payload;
    },
  },
});

export const { setOrder, setPay } = paymentSlice.actions;

export default paymentSlice.reducer;
