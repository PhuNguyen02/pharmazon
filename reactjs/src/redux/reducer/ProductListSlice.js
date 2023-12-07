import { createSlice, current} from "@reduxjs/toolkit";
import { fetchProductList,fetchProductListCategory } from "../api/productListAPI";
const productListSlice = createSlice({
  name:'productsList',
  name:'productsListCategory',
  initialState:{
    productsData :[],
    categoryProductData :[],
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
  },
  reducers: {
    addProduct (state, action){
      state.push(action.payload)
      console.log("state",state);
    },
    removeProduct (state, action){
      state.splice(action.payload,1)
    },
    updateProduct(state, action) {
      const indexProduct = current(state).findIndex(item => item.id !== action.payload.id)
      if(indexProduct > -1) state[indexProduct] = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductList.fulfilled, (state, action) => {
      state.productsData = action.payload
      console.log("bcvvv",action);
    })
    .addCase(fetchProductList.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchProductList.pending ,(state) => {
      state.isLoading = true
    })
    .addCase(fetchProductListCategory.fulfilled, (state, action) => {
        
      state.categoryProductData = action.payload
      console.log("abc",action);
    })
    .addCase(fetchProductListCategory.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchProductListCategory.pending ,(state) => {
      state.isLoading = true
    })
  },
})
const {actions, reducer} = productListSlice
export const {addProduct, removeProduct, updateProduct} = actions
export default reducer
