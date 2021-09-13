import React from 'react'
import {Box, ToggleButton, Typography} from "@mui/material";
import {RootState, useAppDispatch} from "./redux/store";
import {setType} from "./redux/typeSlice";
import {Type, types} from "../data/types";
import {useSelector} from "react-redux";

export default function TypeChoiceTab() {
    const type = useSelector<RootState, Type | null>(state => state.type.type)
    const dispatch = useAppDispatch()
    return <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        {types.map(value => <ToggleButton
            onChange={() => dispatch(setType(value))}
            selected={type !== null && type.id === value.id}
            key={value.id}
            value={value.id}
            sx={{maxWidth: 250, mx: 2, display: "flex", flexDirection: "column", textTransform: "none"}}>
            <Typography color="primary">{value.image}</Typography>
            <Typography variant="h5">{value.title}</Typography>
            <Typography variant="subtitle1">{value.description}</Typography>
        </ToggleButton>)}
    </Box>
}