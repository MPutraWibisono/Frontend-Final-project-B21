import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
  category: [],
  chapter: [],
  material: [],
  search: [],
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setCourse, setChapter, setMaterial, setSearch } =
  courseSlice.actions;

export default courseSlice.reducer;
