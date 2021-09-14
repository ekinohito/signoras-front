import React from 'react'
import {Box} from "@mui/material";

export default function View(props: { children: any }) {
    return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Box sx={{display: "inline-flex", flexDirection: "column", alignItems: "center"}}>
            {props.children}
        </Box>
    </Box>
}