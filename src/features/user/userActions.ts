import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import {RootState} from "../../app/store"
import {apiUrl} from "../../config/api";
import {LoginUserResponse, LoginUser, UserResponse, UserBooksResponse, CollectionEntity} from 'types'

export const userLogin: any = createAsyncThunk<LoginUserResponse,
    LoginUser,
    { state: RootState }>('/', async ({email, password}: LoginUser, thunkAPI) => {
    try {
        const response = await axios.post(`${apiUrl}/users`, {email, password})
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
export const fetchUserByToken: any = createAsyncThunk<UserResponse,
    { state: RootState }>('/', async (arg, thunkAPI) => {
    try {
        const userToken = localStorage.getItem('userToken')
        const {data} = await axios.get(`${apiUrl}/users/${userToken}`)
        return data
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

export const getUserBooks: any = createAsyncThunk<UserBooksResponse,
    { state: RootState }>(
    '/books/collections/:id',
    async (arg, thunkAPI) => {
        try {
            const state = (await thunkAPI.getState()) as RootState
            const {data} = await axios.get(`${apiUrl}/collection/${state.users.userInfo.id}`)
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    })
export const addUserBook: any = createAsyncThunk(
    '/books/collections/:id/add',
    async ({userId, bookId}: CollectionEntity, thunkAPI) => {
        try {
            const {data} = await axios.post(`${apiUrl}/collection`, {userId, bookId})
            return data
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })
export const removeUserBook: any = createAsyncThunk(
    '/books/collection/:id/remove',
    async (id: CollectionEntity, thunkAPI) => {
        try {
            await axios.delete(`${apiUrl}/collection/${id}`)
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)