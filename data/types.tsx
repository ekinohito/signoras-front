import {ReactElement} from "react";
import {DirectionsCar, Home} from "@mui/icons-material";

export type Option = {
    id: string,
    text: string
}

export type Field = {
    id: string,
    placeholder: string,
    type: 'string' | 'number' | 'choice' | 'address',
    options?: Option[]
}

export type Type = {
    id: string,
    title: string,
    description: string,
    image: ReactElement,
    fields: Field[]
}

export type TypeStorage = {
    ids: string[],
    values: { [id: string]: Type }
}

export const typeStorage: TypeStorage = {
    ids: ["estate", "auto"],
    values: {
        estate: {
            id: "estate",
            title: "Недвижимость",
            description: "Нажмите сюда, если клиент предлагет недвижимость",
            image: <Home sx={{fontSize: 100}}/>,
            fields: [
                {
                    type: "number",
                    id: "rooms",
                    placeholder: "Кол-во комнат"
                },
                {
                    type: "number",
                    id: "floor",
                    placeholder: "Этаж"
                },
                {
                    type: "choice",
                    id: "material",
                    placeholder: "Материал стен",
                    options: [
                        {
                            id: "unset",
                            text: "Неважно"
                        },
                        {
                            id: "brick",
                            text: "Кирпичный"
                        },
                        {
                            id: "wood",
                            text: "Деревянный"
                        },
                        {
                            id: "monolith",
                            text: "Монолитный"
                        },
                        {
                            id: "panel",
                            text: "Панельный"
                        },
                        {
                            id: "block",
                            text: "Блочный"
                        },
                        {
                            id: "monolithBrick",
                            text: "Кирпично-монолитный"
                        },
                        {
                            id: "stalin",
                            text: "\"Сталинский\""
                        }
                    ]
                },
                {
                    type: "number",
                    id: "story",
                    placeholder: "Кол-во этажей"
                },
                {
                    type: "number",
                    id: "area_total",
                    placeholder: "Общая площадь"
                },
                {
                    type: "number",
                    id: "area_living",
                    placeholder: "Жилая площадь"
                },
                {
                    type: "address",
                    id: "address",
                    placeholder: "Адрес"
                },
                {
                    type: "number",
                    id: "year",
                    placeholder: "Год постройки"
                },
                {
                    type: "number",
                    id: "area_kitchen",
                    placeholder: "Площадь кухни"
                },
            ]
        },
        auto: {
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
    }
}

export const types = typeStorage.ids.map(id => typeStorage.values[id])