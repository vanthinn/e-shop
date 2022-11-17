import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  allCategries: [],
};

const products = createSlice({
  initialState,
  name: "products",
  reducers: {},
});
