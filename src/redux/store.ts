import {configureStore} from "@reduxjs/toolkit";
import {stepReducer} from "./stepSlice";
import {useDispatch} from "react-redux";
import {typeReducer} from "./typeSlice";

export const store = configureStore({
    reducer: {
        step: stepReducer,
        type: typeReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()