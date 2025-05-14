import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    laoding: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducer: {

    },
    extraReducers: (builder) => {

    }
})


export const { } = appSlice.actions

export default appSlice.reducer