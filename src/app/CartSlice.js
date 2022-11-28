import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        state.cartItems.push(action.payload);
      }
      toast.success(
        `Add ${action.payload.cartQuantity} ${action.payload.title} Successfully!`,
        {
          position: "top-center",
        }
      );
    },

    removeItemToCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      toast.success(`${action.payload.title} Removed From Cart`);
    },

    SetIncreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
    },

    setDecreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
    },

    ClearAll: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  SetIncreaseItem,
  setDecreaseItem,
  GetTotal,
  ClearAll,
} = CartSlice.actions;

export default CartSlice.reducer;
