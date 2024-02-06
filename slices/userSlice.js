import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: { email: "", password: "" },
  login: { email: "", password: "" },
  userInfo: null,
  updates: {
    others: { location: "", contact: 0, firstname: "", lastname: "" },
    password: { oldPassword: "", newPassword: "" },
    email: { email: "" },
  },
};
const user = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateReg(state, action) {
      const { name, value } = action.payload;
      state.register[name] = value;
    },
    clearRegInfo(state) {
      state.register = { email: "", password: "" };
    },
    updateLogin(state, action) {
      const { name, value } = action.payload;
      state.login[name] = value;
    },
    clearLoginInfo(state) {
      state.login = { email: "", password: "" };
    },
    fillUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setUpdates(state, action) {
      const { name, parent, value } = action.payload;
      state.updates[parent][name] = value;
    },
    clearUpdates(state) {
      state.updates = {
        others: { location: "", contact: 0, firstname: "", lastname: "" },
        password: { oldPassword: "", newPassword: "" },
        email: { email: "" },
      };
    },
    fillUpdates(state, action) {
      const { name, obj } = action.payload;
      state.updates[name] = obj;
    },
  },
});

export const userSliceActions = user.actions;
const userSlice = user.reducer;

export default userSlice;
