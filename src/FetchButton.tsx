import React from 'react'
import {Button} from "@mui/material";
import api from "./api";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {abortFetching, setResult, startFetching} from "./redux/resultSlice";
import {typeStorage} from "../data/types";

export default function FetchButton(props: { ready: boolean, index: number }) {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.arguments.arguments)
    const type = useAppSelector(state => state.type.typeId && typeStorage.values[state.type.typeId])
    return <Button
        color="primary"
        variant="contained"
        disabled={!type}
        sx={{mx: 2, mt: 4, textTransform: "none", fontSize: "1.5rem", py: 2, borderRadius: "10px"}}
        onClick={async () => {
            if (!type) return
            try {
                dispatch(startFetching())
                const res = await api.post(type.id, data)
                console.log(res.data)
                dispatch(setResult(res.data.prediction))
            } catch (e) {
                console.warn(e)
                dispatch(abortFetching())
            }
        }}>Получить результат</Button>
}