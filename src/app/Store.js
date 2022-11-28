import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import AuthSlice from "./AuthSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    auth: AuthSlice,
  },
});

export default store;
