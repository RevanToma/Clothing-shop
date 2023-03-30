import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartITems } from "./cart.action";
import { AnyAction } from "redux";

export type CartItemsState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};
export const CART_INITIAL_STATE: CartItemsState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartItemsState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }
  if (setCartITems.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  return state;
};
