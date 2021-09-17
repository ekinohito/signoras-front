import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ResultState {
    value: number,
    state: "ready" | "pending" | "none"
}

const initialState = {value: 0, state: "none"} as ResultState

const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setResult(state, action: PayloadAction<number>) {
            state.state = "ready"
            state.value = action.payload
        },
        startFetching(state) {
            state.state = "pending"
        },
        abortFetching(state) {
            state.state = "none"
        }
    }
})

export const {setResult, startFetching, abortFetching} = resultSlice.actions
export const resultReducer = resultSlice.reducer