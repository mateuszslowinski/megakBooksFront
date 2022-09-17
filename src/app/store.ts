import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "../features/user/userSlice";


export const store:any = configureStore({
    reducer: {
        users: userSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;