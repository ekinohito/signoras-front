import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ArgumentsState {
    arguments: {[id: string]: string}
}

const initialState = {arguments: {}} as ArgumentsState

const argumentsSlice = createSlice({
    name: "arguments",
    initialState,
    reducers: {
        set(state, action: PayloadAction<{id: string, value: string}>) {
            state.arguments[action.payload.id] = action.payload.value
        },
    }
})

export const {set} = argumentsSlice.actions
export const argumentsReducer = argumentsSlice.reducer