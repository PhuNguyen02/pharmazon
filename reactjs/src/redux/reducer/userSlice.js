import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser,fetchUserList,loginUser } from "../api/userAPI";
const authenSlice = createSlice({
    name: 'auth',
    name: 'login',
    initialState: {
        userData: [],
        user:[],
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(RegisterUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })

            .addCase(fetchUserList.fulfilled, (state, action) => {
                state.userData = action.payload
            })
            .addCase(fetchUserList.rejected, (state, action) => {
                state.errorMessage = action.payload
            })
            .addCase(fetchUserList.pending, (state) => {
                state.isLoading = true
            })
    }
})

const {actions, reducer} = authenSlice
export const {} = actions
export default reducer