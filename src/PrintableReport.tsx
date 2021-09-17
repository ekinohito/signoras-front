import {Button, Typography} from "@mui/material";
import {PDFExport} from "@progress/kendo-react-pdf";
import React, {useRef} from "react";
import styles from "./printable.module.css"
import {useAppSelector} from "./redux/store";
import {typeStorage} from "../data/types";

export default function PrintableReport() {
    const pdfExport = useRef<PDFExport>(null)
    const result = useAppSelector(state => state.result.value)
    const args = useAppSelector(state => state.type.typeId && typeStorage.values[state.type.typeId].fields.map(value => {
        switch (value.type) {
            case "number":
            case "string":
                return {field: value, value: state.arguments.arguments[value.id]}
            case "choice":
                return {field: value, value: value.options && value.options.find(value1 => value1.id === state.arguments.arguments[value.id])?.text}
            case "address":
                return {field: value, value: (state.arguments.arguments[value.id] as any || {label: ''}).label}
        }

    }))
    return <>
        <div className={styles.wrapper}>
            <PDFExport paperSize="A4" ref={pdfExport}>
                <div className={styles.printable}>
                    <Typography variant="h4">Отчет о предсказанной залоговой стоимости</Typography>
                    <Typography variant="h5">Введенные данные:</Typography>
                    {args && args.map(value => <div key={value.field.id}>{value.field.placeholder}: {value.value}</div>)}
                    <Typography variant="h5">Оценка стоимости: {result.toFixed(0)} руб.</Typography>
                </div>
            </PDFExport>
        </div>

        <Button variant="contained" onClick={() => {
            pdfExport.current?.save()
        }}>Сохранить PDF</Button>
    </>
}