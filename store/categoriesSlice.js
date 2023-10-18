import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      const { categories } = action.payload;
      state.categories = categories;
    },
    setActiveCategory(state, action) {
      const { category } = action.payload;
      state.activeCategory = category;
    },
  },
});

export const { setCategories, setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice;
