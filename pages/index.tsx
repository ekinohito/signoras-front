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
import NextButton from "../src/NextButton";
import FetchButton from "../src/FetchButton";

const Home: NextPage = () => {
    const step = useSelector<RootState, number>(state => state.step.value)
    const ready = useSelector<RootState, boolean>(state => state.type.typeId !== null)
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
                <Stack spacing={6}>
                    <Box>
                        <Typography variant="h3" sx={{textAlign: "center", fontWeight: "500", mt: 6, mb: 1}}>Оценка залогового имущества</Typography>
                        <Typography variant="h5" sx={{textAlign: "center"}}>Наш сервис помогает оценить недвижимость и автомобили</Typography>
                    </Box>
                    <CustomStepper steps={['Выберите тип', 'Введите данные', 'Заберите результат']} step={step}/>
                    <Box>
                        <SwipeableViews index={step}>
                            <View>
                                <Typography variant="h5" sx={{textAlign: "center", mb: 3}}>Выберите тип залогового имущества:</Typography>
                                <TypeChoiceTab/>
                                <NextButton ready={ready} index={1}/>
                            </View>
                            <View>
                                <Typography variant="h5" sx={{textAlign: "center", mb: 3}}>Введите полученные от клиента данные о залоговом имуществе:</Typography>
                                <InputFieldsTab/>
                                <NextButton ready={ready} index={2}/>
                                <Button onClick={() => dispatch(prev())}>Назад</Button>
                            </View>
                            <View>
                                <FetchButton ready={true} index={0}/>
                                <PrintableReport/>
                                <Button onClick={() => dispatch(prev())}>Назад</Button>
                            </View>
                        </SwipeableViews>
                    </Box>

                </Stack>
            </Container>
        </>
    )
}

export default Home
