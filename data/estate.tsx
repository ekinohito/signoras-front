import {Apartment} from "@mui/icons-material";
import {Type} from "./types";

export const estate: Type = {
    id: "estate",
    title: "Квартира",
    description: "Нажмите сюда, если клиент предлагает недвижимость",
    image: <Apartment sx={{fontSize: 100}}/>,
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
}

export function getMaterial(id: string) {
    // @ts-ignore
    return estate.fields[2].options.find(value => value.id === id)?.text || "Неважно"
}