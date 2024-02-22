import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'
import { useParams } from 'react-router-dom'

export const fetchProductList = createAsyncThunk(
    'productsList/fetchAll',
    async (page,thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/products/allProducts?limit=${limit}$page=' + page,  { params: thunkAPI })
        return response.data;
    }
)
export const fetchProductListCategory = createAsyncThunk(
    'productsListCategory/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/products/products/category',  { params: thunkAPI })
        console.log("API", thunkAPI);
        return response.data;
    }
)
export const fetchProductById = createAsyncThunk(
    'productById/fetchAll',
    async (id) => {
        const response = await axios.get(URL_API+ `/api/products/${id}`)
        console.log("idProduct",response.data);
        return response.data
    }
)
export const createProduct = createAsyncThunk(
    'product/productAdd',
    async (product,thunkAPI) => {
        const response = await axios.post(URL_API+ '/api/products/',product)
        console.log("APIIIII",response.data);
        return response.data
    }
)

export const updateProduct = createAsyncThunk(
    'product/productUpdate',
    async(product,thunkAPI,id) => {
        const response = await axios.put(URL_API + `/api/products/${id}`, product)
        return response.data
    }
)
