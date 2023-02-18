import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    setFilter: (state, { payload }) => state = payload,
      },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;