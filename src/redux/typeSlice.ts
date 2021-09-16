import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Type} from "../../data/types";

interface TypeState {
    typeId: string | null
}

const initialState = {typeId: null} as TypeState

const typeSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        setType(state, action: PayloadAction<string>) {
            state.typeId = action.payload
        }
    }
})

export const {setType} = typeSlice.actions
export const typeReducer = typeSlice.reducer