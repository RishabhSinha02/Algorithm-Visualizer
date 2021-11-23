import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortMethod: "merge",
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    setSortMethod(state, action) {
      state.sortMethod = action.payload;
    },
  },
});

export const sortActions = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
