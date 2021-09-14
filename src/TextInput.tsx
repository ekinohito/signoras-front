import React from 'react'
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {set} from "./redux/argumentsSlice";

export default function TextInput(props: {label: string, id: string}) {
    const dispatch = useDispatch()
    const value = useSelector<RootState, string>(state => state.arguments.arguments[props.id] || "")
    return <TextField
        label={props.label}
        value={value}
        onChange={(e) => dispatch(set({id: props.id, value: e.target.value}))}
    />
}