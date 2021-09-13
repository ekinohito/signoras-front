import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface StepState {
    value: number
}

const initialState = {value: 0} as StepState

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        next(state) {
            state.value += 1
        },
        prev(state) {
            state.value -= 1
        },
        goto(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})

export const {next, prev, goto} = stepSlice.actions
export const stepReducer = stepSlice.reducer