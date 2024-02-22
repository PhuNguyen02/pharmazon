import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name:'cart',
  initialState:{
    cartItems :[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
  },
  reducers: {
    addToCart(state, action)  {   
      state.cartItems.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    // builder
    //     .addCase(fetchProductById.fulfilled, (state, action) => {
    //         state.cartItems = action.payload
    //     })
    //     .addCase(fetchProductById.rejected, (state, action) => {
    //         state.errorMessage = action.payload
    //     })
    //     .addCase(fetchProductById.pending, (state) => {
    //         state.isLoading = true
    //     })
}
})
const {actions, reducer} = CartSlice
export const {addToCart} = actions
export default reducer
