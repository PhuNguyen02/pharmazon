import { createSlice} from "@reduxjs/toolkit";
import { fetchCategoryList} from "../api/categoryAPI";

const categorySlice = createSlice({ 
    name:'category',
    initialState:{
      categoryData :[],
      isLoading: false,
      isSuccess: false,
      errorMessage: '',
    },
    reducers: {
      addCategory (state, action){
        state.push(action.payload)
      } 
    },
     extraReducers: (builder) => { 
        builder
    .addCase(fetchCategoryList.fulfilled, (state, action) => {
      state.categoryData = action.payload
    })
    .addCase(fetchCategoryList.rejected,(state, action)=> {
      state.errorMessage = action.payload
    })
    .addCase(fetchCategoryList.pending ,(state) => {
      state.isLoading = true
    })
     }
})

const {actions, reducer} = categorySlice
export const {addCategory} = actions
export default reducer
