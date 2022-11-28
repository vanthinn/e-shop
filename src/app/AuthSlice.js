import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: null,
  username: null,
  useid: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetActiveUser: (state, action) => {
      state.isLogin = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.useid = action.payload.useid;
    },
    RemoveActiveUser: (state, action) => {
      state.isLogin = false;
      state.email = null;
      state.username = null;
      state.useid = "";
    },
  },
});

export const { SetActiveUser, RemoveActiveUser } = AuthSlice.actions;

export default AuthSlice.reducer;
