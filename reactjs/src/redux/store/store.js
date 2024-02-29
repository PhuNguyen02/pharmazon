import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducer/cartSlice'
import productListSlice from '../reducer/ProductListSlice'
import categorySlice from '../reducer/CategorySlice'
import productDetailSlice from '../reducer/ProductSLice';
import authenSlice from '../reducer/userSlice'
import { checkAuth } from '../../middleware/middleware';
export const store = configureStore({
  reducer: {
    cart:  cartSlice,
    producsList:productListSlice,
    categoryList: categorySlice,
    productDetail: productDetailSlice,
    auth: authenSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkAuth),
})