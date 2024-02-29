import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchUserList = createAsyncThunk(
    'userList/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/api/user/all')
        return response.data;
    }
)

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async(user) => {
        const response = await axios.post(URL_API + '/api/user/login', user)
        localStorage.setItem('user', JSON.stringify(response))
        console.log("loginuser",response.data);
        return response.data
    }
)
export const RegisterUser = createAsyncThunk(
    'auth/register',
    async(user) => {
        const response = await axios.post(URL_API+ '/api/user/register', user)
        return response.data
    }
)
export const createUser = createAsyncThunk(
    'user/addUser',
    async (user,thunkAPI) => {
        const response = await axios.post(URL_API+ '/api/user/',user)
        console.log("APIIIII",response.data);
        return response.data
    }
)

export const updateProduct = createAsyncThunk(
    'user/userUpdate',
    async(user,thunkAPI,id) => {
        const response = await axios.put(URL_API + `/api/user/${id}`, user)
        return response.data
    }
)
