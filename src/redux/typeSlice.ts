import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Type} from "../../data/types";

interface TypeState {
    type: Type | null
}

const initialState = {type: null} as TypeState

const typeSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        setType(state, action: PayloadAction<Type>) {
            state.type = action.payload
        }
    }
})

export const {setType} = typeSlice.actions
export const typeReducer = typeSlice.reducer