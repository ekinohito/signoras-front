import React, {useEffect} from 'react'
import {Box, ToggleButton, Typography} from "@mui/material";
import {RootState, useAppDispatch} from "./redux/store";
import {setType} from "./redux/typeSlice";
import {Type, types, typeStorage} from "../data/types";
import {useSelector} from "react-redux";

export default function TypeChoiceTab() {
    useEffect(() => {(async () => {

    })()}, [])
    const type = useSelector<RootState, Type | false>(state => state.type.typeId !== null && typeStorage.values[state.type.typeId])
    const dispatch = useAppDispatch()
    return <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        {types.map(value => <ToggleButton
            onChange={() => dispatch(setType(value.id))}
            selected={type && type.id === value.id}
            key={value.id}
            value={value.id}
            sx={{width: 225, height: 225, m: 2, display: "flex", flexDirection: "column", textTransform: "none"}}>
            <Typography color="primary">{value.image}</Typography>
            <Typography variant="h5">{value.title}</Typography>
        </ToggleButton>)}
    </Box>
}