// import { USER_ACTION_TYPES } from "./user.types";

import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
