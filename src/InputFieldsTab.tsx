import React from 'react'
import {Type} from "../data/types";
import {Box, TextField, Typography} from "@mui/material";
import {RootState, useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import TextInput from "./TextInput";
import FloatInput from "./FloatInput";

export default function InputFieldsTab() {
    const dispatch = useAppDispatch()
    const type = useSelector<RootState, Type | null>(state => state.type.type)
    return <Box flexDirection="row" display="flex" justifyContent="center">
        <Box flexShrink={0} flexBasis={150}>
            <Typography color="primary">{type?.image}</Typography>
        </Box>
        <Box display="flex" flexGrow={1} flexWrap="wrap">
            {type?.fields.map(value => {
                let inner = null
                switch (value.type) {
                    case "string":
                        inner = <TextInput label={value.placeholder} id={value.id}/>
                        break
                    case "number":
                        inner = <FloatInput label={value.placeholder} id={value.id}/>
                        break
                    case "choice":
                        inner = <></>
                }
                return <Box flexBasis="200px" sx={{m: 1}} key={value.id}>
                    {inner}
                </Box>
            })}
        </Box>

    </Box>
}