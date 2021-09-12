import React from 'react'
import {Type} from "../data/types";
import {Button, Card, CardActions, CardContent, Typography, Box} from "@mui/material";
import Image from 'next/image'

export default function TypeChoiceTab(props: {types: Type[]}) {
    return <>
        {props.types.map(value => <Card key={value.id}>
            <CardContent>
                <Box sx={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                    <Box sx={{mr: 2}}>
                        <Image src={value.image} width={240} height={160} objectFit="fill" alt="no"/>
                    </Box>
                    <Box sx={{display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "start"}}>

                        <Typography variant="h5">{value.title}</Typography>
                        <Typography variant="body1">{value.description}</Typography>
                        <Button sx={{alignSelf: "end", justifySelf: "stretch"}}>Далее</Button>
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>)}
    </>
}