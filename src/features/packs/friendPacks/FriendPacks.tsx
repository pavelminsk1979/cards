
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st from './FriendPacks.module.css'
import {BlokNameAndButton} from "features/packs/packs/upperBlock/BlokNameAndButton";
import {ChangeEvent, KeyboardEvent,  useState} from "react";
import {Pagingtor} from "components/paginator/Pagingtor";
import {LinkOnPacks} from "components/linkOnPacks/linkOnPacks";



export const FriendPacks = () => {

    const [textInput, setTextInput] = useState('')

    const cardPacks = [1,2,3,4,5,6,7,8,9] /*чтобы при мапинге  небыло ошибки*/


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTextInput('')
            /* ОТСЮда текс из инпута передавать дальше*/
        }
    }

    return (
        <div className={st.common}>
            <LinkOnPacks/>
            <BlokNameAndButton
                title='Колоды Пользователей или Мои Колоды'
                nameButton='ГО на пиво! '/>
            <div>
                <div className={st.text}>
                    Поиск
                </div>
                <input
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeHandler}
                    value={textInput}
                    className={st.input}
                    type="text"/>

            </div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow className={st.tableHead}>
                            <TableCell>Вопрсы</TableCell>
                            <TableCell align="center">Ответы</TableCell>
                            <TableCell align="center">Последнее обновление</TableCell>
                            <TableCell align="center">Оценка</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={st.tableBody}>
                        {cardPacks.map((pack) => (
                            <TableRow
                                key={pack}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                <TableCell component="th" scope="row">
                                   какойто вопрос
                                </TableCell>
                                <TableCell align="center">какойто ответ</TableCell>
                                <TableCell align="center">дата-дата</TableCell>
                                <TableCell align="center">звездочки</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagingtor/>
        </div>
    );
}
