import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.showSideBar = action.payload;
    },
  },
});

export const { toggleSideBar } = headerSlice.actions;

export default headerSlice.reducer;
