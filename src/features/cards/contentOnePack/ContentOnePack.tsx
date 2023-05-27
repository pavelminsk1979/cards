import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st from 'features/cards/contentOnePack/ContentOnePack.module.css'
import {BlokNameAndButton} from "features/packs/packs/upperBlock/BlokNameAndButton";
import {ChangeEvent, KeyboardEvent,  useState} from "react";
import {Paginator} from "components/paginator/Paginator";
import {LinkOnPacks} from "components/linkOnPacks/linkOnPacks";
import {useSelector} from "react-redux";
import {
    selectCards,
    selectCountItemsForOnePage, selectCountWithServerItems,
    selectNumberPageWithServer,
    selectPackName
} from "features/cards/cardSelectors";



export const ContentOnePack = () => {

    const arrayCards = useSelector(selectCards)

    const packName = useSelector(selectPackName)

    const numberPageWithServer = useSelector(selectNumberPageWithServer)

    const countItemsForOnePage = useSelector(selectCountItemsForOnePage)

    const countWithServerItems = useSelector(selectCountWithServerItems)

    const [textInput, setTextInput] = useState('')


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTextInput('')
            /* ОТСЮда тексt из инпута передавать дальше*/
        }
    }
    
    const createCard = () => {
      
    }
    const titlePlasNamePack = `Наименование Колоды : ${packName}`

    return (
        <div className={st.common}>
            <LinkOnPacks/>
            <BlokNameAndButton
                callback={createCard}
                title={titlePlasNamePack}
                nameButton='Добавить карточку'/>
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
                        {arrayCards.map((el) => (
                            <TableRow
                                key={el._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>

                                <TableCell component="th" scope="row">
                                    {el.question}
                                </TableCell>
                                <TableCell align="center">
                                    {el.answer}</TableCell>
                                <TableCell align="center">
                                    {el.updated}</TableCell>
                                <TableCell align="center">звездочки</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginator
                idCurrentPack={arrayCards[0].cardsPack_id}  /*айдишка колоды одинаковая в любой карточке из массива карточек*/
                countWithServerItems={countWithServerItems}
                countItemsForOnePage={countItemsForOnePage}
                numberPageWithServer={numberPageWithServer}/>
        </div>
    );
}