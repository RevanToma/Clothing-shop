// import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createSlice } from "@reduxjs/toolkit";
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
