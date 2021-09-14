import {Button, Typography} from "@mui/material";
import {PDFExport} from "@progress/kendo-react-pdf";
import React, {useRef} from "react";
import styles from "./printable.module.css"

export default function PrintableReport() {
    const pdfExport = useRef<PDFExport>(null)
    return <>
        <div className={styles.wrapper}>
            <PDFExport paperSize="A4" ref={pdfExport}>
                <div className={styles.printable}>
                    <Typography variant="h4">Отчет о предсказанной залоговой стоимости</Typography>
                    <Typography variant="h5">Введенные данные:</Typography>
                    <Typography variant="h5">Полученные результаты:</Typography>
                </div>
            </PDFExport>
        </div>

        <Button variant="contained" onClick={() => {
            pdfExport.current?.save()
        }}>Сохранить PDF</Button>
    </>
}