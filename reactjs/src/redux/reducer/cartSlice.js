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
    
      console.log("stateee",state)
    }
  },
})
const {actions, reducer} = CartSlice
export const {addToCart} = actions
export default reducer
