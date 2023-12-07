import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducer/cartSlice'
import productListSlice from '../reducer/ProductListSlice'
export const store = configureStore({
  reducer: {
    cart:  cartSlice,
    producsList:productListSlice
  }
})