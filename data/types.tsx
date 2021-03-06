import {ReactElement} from "react";
import {car} from "./car";
import {estate} from "./estate";
import {house} from "./house";

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
    ids: ["estate", "house", "car"],
    values: {
        estate,
        house,
        car,
    }
}

export const types = typeStorage.ids.map(id => typeStorage.values[id])