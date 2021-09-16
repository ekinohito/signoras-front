import {configureStore} from "@reduxjs/toolkit";
import {stepReducer} from "./stepSlice";
import {useDispatch, useSelector} from "react-redux";
import {typeReducer} from "./typeSlice";
import {argumentsReducer} from "./argumentsSlice";
import {resultReducer} from "./resultSlice";

export const store = configureStore({
    reducer: {
        step: stepReducer,
        type: typeReducer,
        arguments: argumentsReducer,
        result: resultReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <R>(selector: (state: RootState) => R) => useSelector<RootState, R>(selector)