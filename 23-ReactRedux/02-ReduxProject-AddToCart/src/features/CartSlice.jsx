import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let isExist = state.cartItems.find((item) => item.id === action.payload.id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      let data = state.cartItems.find((item) => item.id === action.payload.id);
      if (data.quantity > 0) {
        data.quantity -= 1;
      } else {
        data.quantity = undefined;
      }
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
