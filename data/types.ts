export type Type = {
    id: string,
    title: string,
    description: string,
    image: string
}

export const types: Type[] = [
    {
        id: "auto",
        title: "Автомобиль",
        description: "Нажмите сюда, если клиент предлагет автомобиль",
        image: "/assets/auto.jpeg"
    }
]