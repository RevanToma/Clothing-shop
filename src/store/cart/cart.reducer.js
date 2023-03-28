// import { CART_ACTION_TYPES } from "./cart.types";
import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const clearCartItems = () => (dispatch) => {
  dispatch(setCartItems([]));
};
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const cartSlice = createSlice({
  name: "cartItems",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems: (state, { payload }) => {
      state.cartItems = payload;
    },
    addItemToCart: (state, { payload }) => {
      state.cartItems = addCartItem(state.cartItems, payload);
    },
    removeItemFromCart: (state, { payload }) => {
      state.cartItems = removeItem(state.cartItems, payload);
    },
    clearItemFromCart: (state, { payload }) => {
      state.cartItems = clearCartItem(state.cartItems, payload);
    },
    setIsCartOpen: (state, { payload }) => {
      state.isCartOpen = payload;
    },
  },
});

export const {
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
