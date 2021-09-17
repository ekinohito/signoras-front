import {DirectionsCar} from "@mui/icons-material";
import {Type} from "./types";

export const car: Type = {
    id: "car",
    title: "Автомобиль",
    description: "Нажмите сюда, если клиент предлагает автомобиль",
    image: <DirectionsCar sx={{fontSize: 100}}/>,
    fields: [
        {
            type: "choice",
            id: "brand",
            placeholder: "Марка автомобиля",
            options: [
                {id: 'other', text: 'Другая'},
                {id: 'chevrolet', text: 'Chevrolet'},
                {id: 'dodge', text: 'Dodge'},
                {id: 'plymouth', text: 'Plymouth'},
                {id: 'honda', text: 'Honda'},
                {id: 'subaru', text: 'Subaru'},
                {id: 'isuzu', text: 'Isuzu'},
                {id: 'mitsubishi', text: 'Mitsubishi'},
                {id: 'renault', text: 'Renault'},
                {id: 'toyota', text: 'Toyota'},
                {id: 'volkswagen', text: 'Volkswagen'},
                {id: 'nissan', text: 'Nissan'},
                {id: 'mazda', text: 'Mazda'},
                {id: 'saab', text: 'Saab'},
                {id: 'peugeot', text: 'Peugeot'},
                {id: 'alfa-romero', text: 'Alfa Romero'},
                {id: 'mercury', text: 'Mercury'},
                {id: 'audi', text: 'Audi'},
                {id: 'volvo', text: 'Volvo'},
                {id: 'bmw', text: 'Bmw'},
                {id: 'porsche', text: 'Porsche'},
                {id: 'buick', text: 'Buick'},
                {id: 'jaguar', text: 'Jaguar'}
            ]
        },
        {
            type: "choice",
            id: "fuel",
            placeholder: "Тип топлива",
            options: [
                {id: "gas", text: "Бензин"},
                {id: "diesel", text: "Дизель"}
            ]
        },
        {
            type: "choice",
            id: "aspiration",
            placeholder: "Наддув",
            options: [
                {id: "std", text: "Нет"},
                {id: "turbo", text: "Турбо"}
            ]
        },
        {
            type: "number",
            id: "car_length",
            placeholder: "Длина в см"
        },
        {
            type: "number",
            id: "cylinder_count",
            placeholder: "Количество цилиндров"
        },
        {
            type: "number",
            id: "engine_size",
            placeholder: "Объем двигателя в л"
        },
        {
            type: "number",
            id: "horsepower",
            placeholder: "Мощность в л.с."
        },
        {
            type: "number",
            id: "peak_rpm",
            placeholder: "Оборотов в мин"
        },
        {
            type: "number",
            id: "consumption_rate",
            placeholder: "Расход в л/100 км"
        },
        {
            type: "choice",
            id: "symbol",
            placeholder: "Страховая опасность",
            options: [
                {id: "-2", text: "Очень безопасно"},
                {id: "-1", text: "Достаточно безопасно"},
                {id: "0", text: "Безопасно"},
                {id: "1", text: "Нейтрально"},
                {id: "2", text: "Достаточно опасно"},
                {id: "3", text: "Очень опасно"},
            ]
        },
        {
            type: "choice",
            id: "car_body_style",
            placeholder: "Тип автомобиля",
            options: [
                {id: "sedan", text: "Седан"},
                {id: "hatchback", text: "Хэтчбэк"},
                {id: "convertible", text: "Кабриолет"},
                {id: "hardtop", text: "Хардтоп"},
                {id: "wagon", text: "Универсал"},
            ]
        },
        {
            type: "choice",
            id: "drive_wheel",
            placeholder: "Привод",
            options: [
                {id: "4wd", text: "Полный"},
                {id: "fwd", text: "Передний"},
                {id: "rwd", text: "Задний"},
            ]
        },
        {
            type: "choice",
            id: "engine",
            placeholder: "Тип двигателя",
            options: [
                {id: "dohc", text: "DOHC"},
                {id: "dohcv", text: "DOHCV"},
                {id: "l", text: "L"},
                {id: "ohc", text: "OHC"},
                {id: "ohcf", text: "OHCF"},
                {id: "rotor", text: "Роторный"},
            ]
        },
        {
            type: "choice",
            id: "fuel_system",
            placeholder: "Тип топливной системы",
            options: [
                {id: "1bbl", text: "1bbl"},
                {id: "2bbl", text: "2bbl"},
                {id: "4bbl", text: "4bbl"},
                {id: "idi", text: "IDI"},
                {id: "mfi", text: "MFI"},
                {id: "mpfi", text: "MPFI"},
                {id: "spdi", text: "SPDI"},
                {id: "spfi", text: "SPFI"},
            ]
        }
    ]
}