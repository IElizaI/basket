import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import shoppingBasket from './reducers/shoppingBasket';

const store = configureStore({
  reducer: combineReducers({
    shoppingBasket,
  }),
});

export default store;
