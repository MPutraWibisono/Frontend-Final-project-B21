import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  category: [],
  chapter: [],
  material: [],
  history: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setChapter: (state, action) => {
      state.chapter = action.payload;
    },
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { setCategory, setCourse, setChapter, setMaterial, setHistory } =
  courseSlice.actions;

export default courseSlice.reducer;
