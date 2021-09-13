import React from 'react'
import {Type} from "../data/types";
import {Button, Card, CardActions, CardContent, Typography, Box, InputLabel, TextField} from "@mui/material";
import Image from 'next/image'
import {goto} from "./redux/stepSlice";
import {RootState, useAppDispatch} from "./redux/store";
import {setType} from "./redux/typeSlice";
import {useSelector} from "react-redux";

export default function InputFieldsTab() {
    const dispatch = useAppDispatch()
    const type = useSelector<RootState, Type | null>(state => state.type.type)
    console.log(type)
    return <>
        {type && type.fields.map(value => <TextField key={value.id} label={value.placeholder} >

        </TextField>)}
    </>
}