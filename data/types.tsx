import {ReactElement} from "react";
import {Home, DirectionsCar} from "@mui/icons-material";

export type Field = {
    id: string,
    placeholder: string,
    type: 'string' | 'number' | 'choice',
    options?: number
}

export type Type = {
    id: string,
    title: string,
    description: string,
    image: ReactElement,
    fields: Field[]
}

export const types: Type[] = [
    {
        id: "estate",
        title: "Недвижимость",
        description: "Нажмите сюда, если клиент предлагет недвижимость",
        image: <Home sx={{fontSize: 100}}/>,
        fields: [
            {
                type: "string",
                id: "address",
                placeholder: "Адрес квартиры"
            },
            {
                type: "number",
                id: "address1",
                placeholder: "Номер(телефона)"
            },
            {
                type: "number",
                id: "address2",
                placeholder: "Номер(телефона)"
            },
            {
                type: "number",
                id: "address3",
                placeholder: "Номер(телефона)"
            },
            {
                type: "number",
                id: "address4",
                placeholder: "Номер(телефона)"
            },
            {
                type: "number",
                id: "address5",
                placeholder: "Номер(телефона)"
            }
        ]
    },
    {
        id: "auto",
        title: "Автомобиль",
        description: "Нажмите сюда, если клиент предлагет автомобиль",
        image: <DirectionsCar sx={{fontSize: 100}}/>,
        fields: [
            {
                type: "string",
                id: "type",
                placeholder: "Тип автомобиля"
            }
        ]
    },
]