import { configureStore } from "@reduxjs/toolkit";
import isLoggedReducer from "./isLoggedSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    isLogged: isLoggedReducer,
    counter: counterReducer,
  },
});
