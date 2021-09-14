import React from 'react'
import {Box, Button} from "@mui/material";
import TypeChoiceTab from "./TypeChoiceTab";
import {goto} from "./redux/stepSlice";

export default function View(props: {children: any}) {
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Box sx={{display: "inline-flex", flexDirection: "column", alignItems: "center"}}>
            {props.children}
        </Box>
    </Box>
}