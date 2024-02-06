import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const defaultSlice = createSlice({
  name: "defaultSlice",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
});

export const defaultSliceActions = defaultSlice.actions;
export default defaultSlice.reducer;
