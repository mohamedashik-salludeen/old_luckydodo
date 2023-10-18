import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      const { products } = action.payload;
      state.products = products;
    },
    setProduct(state, action) {
      const { product } = action.payload;
      state.product = product;
    },
  },
});

export const { setProducts, setProduct } = productsSlice.actions;
export default productsSlice;
