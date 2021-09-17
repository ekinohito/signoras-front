import {House} from "@mui/icons-material";
import {Type} from "./types";

export const house: Type = {
    id: "house",
    title: "Дом",
    description: "Нажмите сюда, если клиент предлагает недвижимость",
    image: <House sx={{fontSize: 100}}/>,
    fields: [
        {
            type: "number",
            id: "house_bedrooms",
            placeholder: "Кол-во спален"
        },
        {
            type: "number",
            id: "house_bathrooms",
            placeholder: "Кол-во ванных комнат"
        },
        {
            type: "number",
            id: "house_area_living",
            placeholder: "Жилая площадь"
        },
        {
            type: "number",
            id: "house_area_total",
            placeholder: "Общая площадь"
        },
        {
            type: "number",
            id: "house_story",
            placeholder: "Кол-во этажей"
        },
        {
            type: "number",
            id: "house_year_built",
            placeholder: "Год постройки"
        },
        {
            type: "number",
            id: "house_year_renovated",
            placeholder: "Год капитального ремонта"
        },
    ]
}