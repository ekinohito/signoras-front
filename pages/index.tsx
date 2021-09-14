import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../src/Header";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import TypeChoiceTab from "../src/TypeChoiceTab";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../src/redux/store";
import {goto, prev} from "../src/redux/stepSlice";
import InputFieldsTab from "../src/InputFieldsTab";
import React from "react";
import SwipeableViews from 'react-swipeable-views';
import CustomStepper from "../src/CustomStepper";
import View from "../src/View";
import PrintableReport from "../src/PrintableReport";

const Home: NextPage = () => {
    const step = useSelector<RootState, number>(state => state.step.value)
    const ready = useSelector<RootState, boolean>(state => state.type.type !== null)
    const dispatch = useAppDispatch()
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <title>Залог Signoras</title>
            </Head>
            <Header/>
            <Container>
                <Stack spacing={4}>
                    <Typography variant="h3" sx={{textAlign: "center", fontWeight: "500", mt: 8}}>Оценка залогового имущества</Typography>
                    <Typography variant="subtitle1" sx={{textAlign: "center"}}>Наш сервис помогает оценить недвижимость и автомобили</Typography>
                    <CustomStepper steps={['Выберите тип', 'Введите данные', 'Заберите результат']} step={step}/>
                    <SwipeableViews index={step}>
                        <View>
                            <TypeChoiceTab/>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={!ready}
                                sx={{alignSelf: "stretch", mx: 2, mt: 4, textTransform: "none"}}
                                onClick={() => {
                                    dispatch(goto(1))
                                }}>Далее</Button>
                        </View>
                        <View>
                            <InputFieldsTab/>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={!ready}
                                sx={{alignSelf: "stretch", mx: 2, mt: 4, textTransform: "none"}}
                                onClick={() => {
                                    dispatch(goto(2))
                                }}>Далее</Button>
                            <Button onClick={() => dispatch(prev())}>Назад</Button>
                        </View>
                        <View>
                            <Button onClick={() => dispatch(prev())}>Назад</Button>
                            <PrintableReport/>
                        </View>
                    </SwipeableViews>
                </Stack>
            </Container>
        </>
    )
}

export default Home
