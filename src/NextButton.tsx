import React from 'react'
import {Button} from "@mui/material";
import {goto} from "./redux/stepSlice";
import {useDispatch} from "react-redux";

export default function NextButton(props: {ready: boolean, index: number}) {
    const dispatch = useDispatch()
    return <Button
        color="primary"
        variant="contained"
        disabled={!props.ready}
        sx={{mx: 2, mt: 4, textTransform: "none", fontSize: "1.5rem", width: "200px", py: 2, borderRadius: "10px"}}
        onClick={() => {
            dispatch(goto(props.index))
        }}>Далее</Button>
}