import React from 'react'
import {Button} from "@mui/material";
import api from "./api";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {setResult} from "./redux/resultSlice";

export default function FetchButton(props: { ready: boolean, index: number }) {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.arguments.arguments)
    return <Button
        color="primary"
        variant="contained"
        disabled={!props.ready}
        sx={{mx: 2, mt: 4, textTransform: "none", fontSize: "1.5rem", py: 2, borderRadius: "10px"}}
        onClick={async () => {
            try {
                const res = await api.post("estate", data)
                console.log(res.data)
                dispatch(setResult(res.data.prediction))
            } catch (e) {
                console.warn(e)
            }
        }}>Получить результат</Button>
}