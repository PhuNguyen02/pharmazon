import { createSlice, current} from "@reduxjs/toolkit";
import { fetchProductList,fetchProductListCategory } from "../api/productListAPI";
const productListSlice = createSlice({
  name:'productsList',
  name:'productsListCategory',
  initialState:{
    productsData :[],
    categoryProductData :[],
    filteredProducts :[],
    sortingOption: "",
    isLoading: false,
    isSuccess: false,
    errorMessage: 'Lỗi',
  },
  reducers: {
      filterProducts: (state, action) => {
        state.filteredProducts = action.payload === "all" ? state.productsData : state.productsData.filter((item) => item.category === action.payload)
      },
     
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProductList.fulfilled, (state, action) => {
      state.productsData = action.payload
      state.push(action.payload)
    })
    .addCase(fetchProductList.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchProductList.pending ,(state) => {
      state.isLoading = true
    })
    .addCase(fetchProductListCategory.fulfilled, (state, action) => {
      state.categoryProductData = action.payload
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
export const {} = actions
export default reducer
