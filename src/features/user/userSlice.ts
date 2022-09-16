import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {LoginUserResponse} from 'types'
import {userLogin} from "./userActions";

export interface UserState {
    token: string | null
    userInfo: LoginUserResponse | null
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

    }
})