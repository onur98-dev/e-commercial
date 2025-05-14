import { configureStore } from '@reduxjs/toolkit'
import AppReducer from '../redux/slices/appSlice'
import ProductReducer from '../redux/slices/productSlice'
import basketReducer from '../redux/slices/basketSlice'

export const store = configureStore({
    reducer: {
        app: AppReducer,
        product: ProductReducer,
        basket: basketReducer
    },
})