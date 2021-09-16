import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {set} from "./redux/argumentsSlice";
import {Option} from "../data/types";

export default function ChoiceInput(props: { label: string, id: string, options?: Option[] }) {
    const dispatch = useDispatch()
    const value = useSelector<RootState, string>(state => state.arguments.arguments[props.id] || "")
    return <FormControl fullWidth>
        <InputLabel id={`${props.id}-select-label`}>{props.label}</InputLabel>
        <Select labelId={`${props.id}-select-label`} value={value} label={props.label}
                onChange={e => dispatch(set({id: props.id, value: e.target.value}))}>
            {props.options?.map(option => <MenuItem key={option.id} value={option.id}>{option.text}</MenuItem>)}
        </Select>
    </FormControl>
}