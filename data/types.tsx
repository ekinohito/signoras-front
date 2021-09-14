import {ReactElement} from "react";
import {Home, DirectionsCar} from "@mui/icons-material";

export type Field = {
    id: string,
    placeholder: string
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
                id: "address",
                placeholder: "Адрес квартиры"
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
                id: "type",
                placeholder: "Тип автомобиля"
            }
        ]
    },
]