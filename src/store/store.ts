import { configureStore } from '@reduxjs/toolkit'
import {fakestoreApi} from '../services/fakestoreApi'

export const store = configureStore({
    reducer: {
        [fakestoreApi.reducerPath]: fakestoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fakestoreApi.middleware),
})