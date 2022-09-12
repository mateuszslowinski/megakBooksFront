import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "../../app/store"
import { apiUrl } from "../../config/api";
import {LoginUserResponse,LoginUser, UserResponse} from 'types'

export const userLogin = createAsyncThunk<
    LoginUserResponse,
    LoginUser,
    { state: RootState }
    >('/', async ({ email, password }: LoginUser, thunkAPI) => {
    try {
        const response = await axios.post(`${apiUrl}/users`, { email, password })
        const data = await response.data
        if (response.status === 201) {
            localStorage.setItem('userToken', data.token)
            return data
        } else {
            return thunkAPI.rejectWithValue(data.error)
        }
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})
export const fetchUserByToken = createAsyncThunk<
    UserResponse,
    { state: RootState }
    >('/', async (arg, thunkAPI) => {
    try {
     const  userToken=  localStorage.getItem('userToken')
        const { data } = await axios.get(`${apiUrl}/users/${userToken}`)
        return data
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

