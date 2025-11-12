import { configureStore } from '@reduxjs/toolkit'
import {fakestoreApi} from '../services/fakestoreApi'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        [fakestoreApi.reducerPath]: fakestoreApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakestoreApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch