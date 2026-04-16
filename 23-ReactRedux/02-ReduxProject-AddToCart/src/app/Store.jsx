import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";

export let store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
