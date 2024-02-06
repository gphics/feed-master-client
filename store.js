import { configureStore } from "@reduxjs/toolkit";
import defaultSlice from "./slices/defaultSlice";
import userSlice from "./slices/userSlice";
import nutReqSlice from "./slices/nutReqSlice";
import librarySlice from "./slices/librarySlice";
import formulaSlice from "./slices/formulaSlice";

export const store = configureStore({
  reducer: { defaultSlice, userSlice, nutReqSlice, librarySlice, formulaSlice },
});
