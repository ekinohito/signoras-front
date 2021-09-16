import React from 'react'
import {Type, typeStorage} from "../data/types";
import {Box, TextField, Typography} from "@mui/material";
import {RootState, useAppDispatch} from "./redux/store";
import {useSelector} from "react-redux";
import TextInput from "./TextInput";
import FloatInput from "./FloatInput";
import ChoiceInput from "./ChoiceInput";

export default function InputFieldsTab() {
    const type = useSelector<RootState, Type | false>(state => state.type.typeId !== null && typeStorage.values[state.type.typeId])
    return <Box flexDirection="row" display="flex" justifyContent="center">
        <Box flexShrink={0} flexBasis={150}>
            <Typography color="primary">{type && type.image}</Typography>
        </Box>
        <Box display="flex" flexGrow={1} flexWrap="wrap">
            {type && type.fields.map(value => {
                let inner = null
                switch (value.type) {
                    case "string":
                        inner = <TextInput label={value.placeholder} id={value.id}/>
                        break
                    case "number":
                        inner = <FloatInput label={value.placeholder} id={value.id}/>
                        break
                    case "choice":
                        inner = <ChoiceInput label={value.placeholder} id={value.id} options={value.options}/>
                }
                return <Box flexBasis="200px" sx={{m: 1}} key={value.id}>
                    {inner}
                </Box>
            })}
        </Box>

    </Box>
}