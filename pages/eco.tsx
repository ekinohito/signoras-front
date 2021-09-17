import {NextPage} from "next";
import Head from "next/head";
import React, {useState} from "react";
import Header from "../src/Header";
import {
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import {Check, ecoCars, ecoHouses} from "../data/eco";

const Eco: NextPage = () => {
    const [tab, setTab] = useState<"house" | "car">("house")
    const [houseValue, setHouseValue] = useState<{[label: string]: boolean}>(ecoHouses.reduce((previousValue, currentValue) => {return {...previousValue, [currentValue.label]: false}}, {}))
    const [carValue, setCarValue] = useState("")
    return <>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <title>Экология Signoras</title>
        </Head>
        <Header/>
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="basic tabs example">
                    <Tab value="house" label="Дом"/>
                    <Tab value="car" label="Автомобиль"/>
                </Tabs>
            </Box>
            <FormGroup>
            {({
                house: <>
                    <Typography variant="h4" sx={{my: 3}}>Выберите соответствующие параметры </Typography>
                    {ecoHouses.map(value => <FormControlLabel
                    key={value.label}
                    control={<Checkbox
                        onChange={(event, checked) => setHouseValue({...houseValue, [value.label]: checked})} checked={houseValue[value.label]}/>}
                    label={value.label} />)}

                    <Typography color="primary" variant="h3">
                        {ecoHouses.map(value => houseValue[value.label]?value.percentage * 0.05:0).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2)}%
                    </Typography>
                </>,
                car: <>
                    <Typography variant="h4" sx={{my: 3}}>Выберите тип двигателя</Typography>
                    <RadioGroup
                        value={carValue}
                        onChange={((event, value) => setCarValue(value))}>
                        <FormControlLabel
                            control={<Radio value=""/>}
                            label="Другой" />
                        {ecoCars.map(value => <FormControlLabel
                            key={value.label}
                            control={<Radio value={value.label}/>}
                            label={value.label} />)}
                    </RadioGroup>
                    <Typography color="primary" variant="h3">
                        Скидка: {((ecoCars.find(value => value.label === carValue)?.percentage || 0)* 0.05).toFixed(2)}%
                    </Typography>

                </>
            })[tab]}
            </FormGroup>
        </Container>
    </>
}

export default Eco