export interface Check {
    label: string,
    percentage: number
}

export const ecoHouses: Check[] = [
    {label: "Дом из экологически чистых материалов", percentage: 20},
    {label: "Есть источники альтернативной энергии", percentage: 20},
    {label: "Энергосберегающие лампы", percentage: 15},
    {label: "Автономное водоснабжение", percentage: 15},
    {label: "Высокий уровень теплоизоляции", percentage: 9},
    {label: "Эффективное отопление", percentage: 8},
    {label: "Биотуалет/септик", percentage: 8},
    {label: "Системы шумоподавления", percentage: 5}
]

export const ecoCars: Check[] = [
    {label: "ЕВРО3", percentage: 20},
    {label: "ЕВРО4", percentage: 40},
    {label: "ЕВРО5", percentage: 60},
    {label: "ЕВРО6", percentage: 80},
    {label: "Электромобиль", percentage: 100},
    {label: "Гибридный двигатель", percentage: 100},
]