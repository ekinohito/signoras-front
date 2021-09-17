import {
    Button, CircularProgress,
    Paper, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {PDFExport} from "@progress/kendo-react-pdf";
import React, {useRef} from "react";
import styles from "./printable.module.css"
import {useAppSelector} from "./redux/store";
import {typeStorage} from "../data/types";
import TableReport from "./TableReport";

export default function PrintableReport() {
    const pdfExport = useRef<PDFExport>(null)
    const result = useAppSelector(state => state.result)
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
    if (result.state === "none") return <></>
    if (result.state === "pending") return <CircularProgress/>
    return <>
        <div className={styles.wrapper}>
            <PDFExport paperSize="A4" ref={pdfExport}>
                <div className={styles.printable}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>
                                        <Typography variant="h4">Отчет о предсказанной залоговой стоимости</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>
                                        <Typography variant="h5">Введенные данные:</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>Параметр</TableCell>
                                    <TableCell align="right">Значение</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {args && args.map(value => <TableRow key={value.field.id}>
                                    <TableCell>{value.field.placeholder}</TableCell>
                                    <TableCell align="right">{value.value}</TableCell>
                                </TableRow>)}
                                <TableRow>
                                    <TableCell colSpan={2} align="center">
                                        <Typography variant="h5">Оценка стоимости: {result.value.toFixed(0)} руб.</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </PDFExport>
        </div>
        <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => {
                pdfExport.current?.save()
            }}>Сохранить PDF</Button>
            <TableReport/>
        </Stack>
    </>
}