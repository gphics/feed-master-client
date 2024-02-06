import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: null,
};

const nut = createSlice({
  name: "nutReqSlice",
  initialState,
  reducers: {
    fillAll(state, action) {
      state.all = action.payload;
    },
  },
});


export const nutReqActions = nut.actions
const nutReqSlice = nut.reducer
export default nutReqSlice