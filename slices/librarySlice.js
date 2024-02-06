import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allLibrary: null,
  filteredLibrary: null,
  singleLibrary: null,
  query: "",
};

const main = createSlice({
  name: "librarySlice",
  initialState,
  reducers: {
    fillLibrary(state, action) {
      const { name, data } = action.payload;
      state[name] = data;
    },
    clearLibrary(state, action) {
      state[action.payload] = null;
    },
    updateQuery(state, action) {
      state.query = action.payload;
    },
  },
});

const librarySlice = main.reducer;
export const librarySliceActions = main.actions;

export default librarySlice;
