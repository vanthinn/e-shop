import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
