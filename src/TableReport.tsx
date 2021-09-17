import React from 'react'
// @ts-ignore
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {Button} from "@mui/material";
import {useAppSelector} from "./redux/store";
import {getMaterial} from "../data/estate";

export default function TableReport() {
    const values = useAppSelector(state => state.arguments.arguments)
    const result = useAppSelector(state => state.result.value)
    const ready = useAppSelector(state => state.result.state === "ready" && state.type.typeId === "estate")
    if (!ready) return <></>
    return <>
        <Button
            variant="contained"
            onClick={() => document.getElementById("test-table-xls-button")?.click()}>Сохранить XLS</Button>
        <div style={{display: "none"}}>
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                table="table-to-xls"
                filename="Залог_signoras_отчет"
                sheet="Отчет"
                buttonText="Download as XLS"
            />
            <table id="table-to-xls">
                <tr>
                    <th colSpan={7}>Основные факты и выводы оценки залогового имущества</th>
                </tr>
                <tr>
                    <td rowSpan={4}>Описание объекта оценки</td>
                    <td>Тип помещения</td>
                    <td>Кол-во комнат</td>
                    <td>Этаж</td>
                    <td>Общая площадь, кв.м</td>
                    <td>Жилая площадь, кв.м</td>
                    <td>Площадь кухни, кв.м</td>
                </tr>
                <tr>
                    <td>Квартира</td>
                    <td>{values.rooms}</td>
                    <td>{values.floor}</td>
                    <td>{values.area_total}</td>
                    <td>{values.area_living}</td>
                    <td>{values.area_kitchen}</td>
                </tr>
                <tr>
                    <td colSpan={3}>Наличие неутвержденной перепланировки</td>
                    <td colSpan={2}>Наличие/характер обременений</td>
                    <td>Кадастровый/условный номер</td>
                </tr>
                <tr>
                    <td colSpan={3}/>
                    <td colSpan={2}/>
                    <td/>
                </tr>
                <tr>
                    <td rowSpan={2}>Описание здания</td>
                    <td colSpan={2}>Материал стен дома</td>
                    <td colSpan={2}>Этажность</td>
                    <td colSpan={2}>Год постройки</td>
                </tr>
                <tr>
                    <td colSpan={2}>{getMaterial(values.material)}</td>
                    <td colSpan={2}>{values.story}</td>
                    <td colSpan={2}>{values.year}</td>
                </tr>
                <tr>
                    <td>Адрес объекта оценки</td>
                    <td colSpan={6}>{(values.address as any)?.label || ""}</td>
                </tr>
                <tr>
                    <td>Цель и задача оценки</td>
                    <td colSpan={6}>Определение рыночной стоимости имущества для целей залога
                        Объекта оценки в ПАО Банк &quot;Центр-Инвест&quot;</td>
                </tr>
                <tr>
                    <td>Заказчик оценки</td>
                    <td colSpan={6}/>
                </tr>
                <tr>
                    <td>Основание оценки</td>
                    <td colSpan={6}/>
                </tr>
                <tr>
                    <td colSpan={2}>Ограничения и пределы применения полученной итоговой стоимости</td>
                    <td colSpan={5}>Для целей залога Объекта оценки в ПАО Банк &quot;Центр-Инвест&quot;.</td>
                </tr>
                <tr>
                    <td colSpan={2}>Пользователь, выполнивший оценку:</td>
                    <td colSpan={5}/>
                </tr>
                <tr>
                    <td colSpan={2} rowSpan={2}>Даты:</td>
                    <td colSpan={2}>Дата осмотра объекта</td>
                    <td colSpan={2}>Дата оценки</td>
                    <td>Дата составления отчёта</td>
                </tr>
                <tr>
                    <td colSpan={2}/>
                    <td colSpan={2}/>
                    <td/>
                </tr>
                <tr>
                    <td colSpan={2} rowSpan={2}>Результаты оценки, полученные при применении</td>
                    <td colSpan={3}>Сервиса оценки залогового имущества (в рублях)</td>
                    <td colSpan={2}>Итоговая корректировка пользователем (%)</td>
                </tr>
                <tr>
                    <td colSpan={3}>{result}</td>
                    <td colSpan={2}/>
                </tr>
                <tr>
                    <td colSpan={2}>Итоговая величина стоимости</td>
                    <td colSpan={5}/>
                </tr>
            </table>
        </div>
    </>

}