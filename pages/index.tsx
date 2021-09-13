import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../src/Header";
import {Box, Button, Container, Step, StepIcon, StepLabel, Stepper, Typography} from "@mui/material";
import {Type} from "../data/types";
import TypeChoiceTab from "../src/TypeChoiceTab";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../src/redux/store";
import {goto, prev} from "../src/redux/stepSlice";
import InputFieldsTab from "../src/InputFieldsTab";
import React from "react";
import SwipeableViews from 'react-swipeable-views';
import {HomeMax} from "@mui/icons-material";

type Props = { types: Type[] }

const Home: NextPage<Props> = () => {
    const step = useSelector<RootState, number>(state => state.step.value)
    const ready = useSelector<RootState, boolean>(state => state.type.type !== null)
    const dispatch = useAppDispatch()
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Container>
                <Typography variant="h3" sx={{textAlign: "center", fontWeight: "500", mt: 12}}>Оценка залогового имущества</Typography>
                <Typography variant="subtitle1" sx={{textAlign: "center"}}>Оценка залогового имущества</Typography>
                <Stepper orientation="horizontal" alternativeLabel activeStep={step} sx={{mt: 4}}>
                    <Step>
                        <StepIcon icon={<HomeMax/>}/>
                        <StepLabel>Выберите тип</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Введите данные</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Заберите результат</StepLabel>
                    </Step>
                </Stepper>
                <SwipeableViews index={step}>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Box sx={{mt: 4, display: "inline-flex", flexDirection: "column", alignItems: "center"}}>
                            <TypeChoiceTab/>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={!ready}
                                sx={{alignSelf: "stretch", mx: 2, mt: 4}}
                                onClick={() => {
                                    dispatch(goto(1))
                                }}>Далее</Button>
                        </Box>
                    </Box>

                    <Box>
                        <InputFieldsTab/>
                        <Button onClick={() => dispatch(prev())}>Back</Button>
                    </Box>
                </SwipeableViews>
            </Container>
        </>
    )
}

export default Home
