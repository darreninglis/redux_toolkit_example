import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

export const isLoggedSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleIsLogged: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const { toggleIsLogged } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
