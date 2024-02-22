import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchCategoryList = createAsyncThunk(
    'category/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/categories/allcategory', { params: thunkAPI })
        return response.data;
    }
)