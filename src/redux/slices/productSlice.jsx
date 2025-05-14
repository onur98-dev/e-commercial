import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Product from '../../pages/Product'
const initialState = {

    products: [],
    selectedProducts: {},
    loading: false
}

const BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProducts = action.payload
        },
        getRequestedProducts: (state, action) => {

        }



    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true

        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
    }


})

export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer