import React, {useState} from 'react'
import {Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {set} from "./redux/argumentsSlice";
import {Option} from "../data/types";

const extractLL = ({ uri }: { uri?: string}) => {
    if (!uri) return null
    const re: RegExp = /^ymapsbm1:\/\/geo\?ll=([-+]?\d*\.\d+|\d+)%2C([-+]?\d*\.\d+|\d+)&/
    const res = re.exec(uri)
    if (!res) return null
    return {lon: res[1], lat: res[2]}
}


export default function AddressInput(props: { label: string, id: string, options?: Option[] }) {
    const dispatch = useDispatch()
    const value = useSelector<RootState, string>(state => state.arguments.arguments[props.id])
    const [options, setOptions] = useState<any[]>([])
    return <Autocomplete
        renderInput={(params) => <TextField {...params} label={props.label} />}
        options={options}
        value={value}
        filterOptions={(x) => x}
        onInputChange={async (e, newValue) => {
            try {
                const res = await fetch(`http://localhost:8000/y-proxy?part=${newValue}`)
                const data = await res.json()
                const entries = data.results.map((value: any) => {return {label: value.text, coords: extractLL(value)}}).filter((value: any) => value.coords)
                const newOptions: {[label: string]: any} = {}
                setOptions(entries.map((value: any) => {
                    if (newOptions[value.label])
                        return null
                    newOptions[value.label] = value
                    return value
                }).filter((value: any) => !!value))
                console.log(options)
            } catch (e) {
                console.error(e)
            }
        }}
        onChange={async (e, newValue) => {
            newValue && dispatch(set({id: props.id, value: newValue}))
        }}/>
}