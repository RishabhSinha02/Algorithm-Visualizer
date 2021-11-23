import { configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./Slices/sortSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export default store;
