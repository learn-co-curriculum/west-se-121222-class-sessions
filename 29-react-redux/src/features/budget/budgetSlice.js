import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 100 }

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {

    }
})

export default budgetSlice.reducer