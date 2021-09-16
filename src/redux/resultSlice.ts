import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ResultState {
    value: number
}

const initialState = {value: 0} as ResultState

const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setResult(state, action: PayloadAction<number>) {
            state.value = action.payload
        },
    }
})

export const {setResult} = resultSlice.actions
export const resultReducer = resultSlice.reducer