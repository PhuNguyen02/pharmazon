import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "../api/productListAPI";
const productDetailSlice = createSlice({
    name: 'productById',
    initialState: {
        productData: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.productData = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(fetchProductById.pending, (state) => {
                state.isLoading = true
            })
    }
})

const {actions, reducer} = productDetailSlice
export const {addProduct} = actions
export default reducer