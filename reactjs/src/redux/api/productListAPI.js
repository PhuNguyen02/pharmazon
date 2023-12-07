import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchProductList = createAsyncThunk(
    'productsList/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/products/allProducts',  { params: thunkAPI })
        return response.data;
    }
)

export const fetchProductListCategory = createAsyncThunk(
    'productsListCategory/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/products/products/category',  { params: thunkAPI })
        return response.data;
    }
)
