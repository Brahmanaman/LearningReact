import todoReducer from "./todoSlice.js";

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: todoReducer,
})