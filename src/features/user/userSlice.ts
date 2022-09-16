import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {LoginUserResponse, SimpleBookEntity} from 'types'
import {addUserBook, getUserBooks, removeUserBook, userLogin} from "./userActions";

export interface UserState {
    token: string | null
    userInfo: LoginUserResponse | null
    books: SimpleBookEntity[]
    isLoading: boolean
    isSuccess: boolean
    isFetching: boolean
    isError: boolean
    errorMessage: string
}

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState: UserState = {
    token: userToken,
    userInfo: null,
    books: [],
    isLoading: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        //LOGIN USER
        [userLogin.pending]: (state: RootState) => {
            state.isFetching = true
        },
        [userLogin.rejected]: (
            state: RootState,
            {payload}: PayloadAction<{ error: string }>
        ) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload.error
        },
        [userLogin.fulfilled]: (
            state,
            {payload}: PayloadAction<LoginUserResponse>
        ) => {
            state.userInfo = payload
            state.token = payload.token
            state.isLoading = false
            state.isFetching = false
            state.isSuccess = true
            state.isError = false
            state.errorMessage = ''
            return state
        },
        //GET USER BOOKS
        [getUserBooks.pending]: (state: RootState) => {
            state.isFetching = true
        },
        [getUserBooks.rejected]: (
            state: RootState,
            {payload}: PayloadAction<{ error: string }>
        ) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload.error
        },
        [getUserBooks.fulfilled]: (state: RootState, {payload}: PayloadAction) => {
            state.books = payload
            state.isFetching = false
            state.isSuccess = true
            state.isError = false
            state.errorMessage = ''
            return state
        },
        //ADD BOOK TO COLLECTION
        [addUserBook.pending]: (state: RootState) => {
            state.isFetching = true
        },
        [addUserBook.rejected]: (
            state: RootState,
            {payload}: PayloadAction<{ error: string }>
        ) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload.error
        },
        [addUserBook.fulfilled]: (state: RootState, {payload}: PayloadAction) => {
            state.books = payload
            state.isFetching = false
            state.isSuccess = true
            state.isError = false
            state.errorMessage = ''
            return state
        },
        //REMOVE BOOK FROM COLLECTION
        [removeUserBook.pending]: (state: RootState) => {
            state.isFetching = true
        },
        [removeUserBook.rejected]: (
            state: RootState,
            { payload }: PayloadAction<{ error: string }>
        ) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload.error
        },
        [removeUserBook.fulfilled]: (
            state: RootState,
            { payload }: PayloadAction<{ message: string }>
        ) => {
            state.message = payload
            state.isFetching = false
            state.isSuccess = true
            state.isError = false
            state.errorMessage = ''
            return state
        },
    }
})