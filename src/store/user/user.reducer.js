// import { USER_ACTION_TYPES } from "./user.types";
import { getCurrentUserCartItems } from "../../utils/firebase/firebase.utils";
import { createSlice } from "@reduxjs/toolkit";

export const getShoppingHistory = () => async (dispatch) => {
  dispatch(getShoppingHistoryStart());
  try {
    const cartItems = await getCurrentUserCartItems("cartItems");
    console.log("USER", cartItems);
    dispatch(setCurrentCartItems(cartItems));
  } catch (error) {
    dispatch(getShoppingHistoryFailed(error));
  }
};

const INITIAL_STATE = {
  currentUser: null,
  cartItems: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setCurrentCartItems: (state, { payload }) => {
      state.cartItems = payload;
      state.isLoading = false;
    },
    getShoppingHistoryStart: (state, { payload }) => {
      state.isLoading = true;
    },
    getShoppingHistoryFailed: (state, { payload }) => {
      state.error = payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  setCurrentUser,
  setCurrentCartItems,
  getShoppingHistoryStart,
  getShoppingHistoryFailed,
  clearCart,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
