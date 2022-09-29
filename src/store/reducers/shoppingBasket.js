import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/shoppingBasket';

const initialState = { products: [] };

const shoppingCart = createReducer(initialState, (builder) => {
  builder.addCase(actions.addNewProduct, (state, action) => {
    const { product, amount } = action.payload;
    state.products.push({
      ...product,
      deleted: false,
      amount,
    });
  });
  builder.addCase(actions.removeAllProduct, (state, action) => {
    state.products.forEach((product) => {
      if (product.id === action.payload) {
        product.deleted = true;
      }
    });
  });
  builder.addCase(actions.reestablishProduct, (state, action) => {
    state.products.forEach((product) => {
      if (product.id === action.payload) {
        product.deleted = false;
      }
    });
  });
  builder.addCase(actions.addProduct, (state, action) => {
    const { id, amount } = action.payload;
    state.products = state.products.map((product) => {
      if (product.id === id) {
        product.amount += amount;
        return product;
      }
      return product;
    });
  });
  builder.addCase(actions.removeProduct, (state, action) => {
    const { id, amount } = action.payload;
    state.products = state.products.map((product) => {
      if (product.id === id) {
        product.amount -= amount;
      }
      return product;
    }).filter((product) => product.amount > 0);
  });
});

export default shoppingCart;
