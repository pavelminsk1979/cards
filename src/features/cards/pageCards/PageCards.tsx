import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st from 'features/cards/pageCards/PageCards.module.css'
import {BlokNameAndButton} from "features/packs/packs/upperBlock/BlokNameAndButton";
import {Paginator} from "components/paginator/Paginator";
import {LinkOnPacks} from "components/linkOnPacks/linkOnPacks";
import {useSelector} from "react-redux";
import {
    selectCards,
    selectCountItemsForOnePage, selectCountWithServerItems, selectCurrentIdPack,
    selectNumberPageWithServer,
    selectPackName
} from "features/cards/cardSelectors";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {cardThunk} from "features/cards/cardSlice";
import {appThunk} from "features/app/appSlice";
import {InputForSearchCards} from "features/cards/pageCards/inputForSearch/InputForSearchCards";
import {ColumnActions} from "features/cards/pageCards/columnActions/ColumnActions";



export const PageCards = () => {
const page = useSelector(selectNumberPageWithServer)




    useEffect(() => {
        const cardsPack_id = localStorage.getItem('lastCardsPack_id')
        if(cardsPack_id) {
            dispatch(cardThunk.fetchCards({cardsPack_id}))
        }
        }, [page])

    const dispatch = useAppDispatch();

    const arrayCards = useSelector(selectCards)

    const packName = useSelector(selectPackName)

    const numberPageWithServer = useSelector(selectNumberPageWithServer)

    const countItemsForOnePage = useSelector(selectCountItemsForOnePage)

    const countWithServerItems = useSelector(selectCountWithServerItems)

    const currentIdPack = useSelector(selectCurrentIdPack)


    
    const createCard = () => {
     /* dispatch(cardThunk.createCard({cardsPack_id:currentIdPack}))*/
    }

    const titlePlasNamePack = `Наименование Колоды : ${packName}`

    return (
        <div className={st.common}>
            <LinkOnPacks/>
            <BlokNameAndButton
                callback={createCard}
                title={titlePlasNamePack}
                nameButton='Добавить карточку'/>

            <InputForSearchCards/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow className={st.tableHead}>
                            <TableCell>Вопрсы</TableCell>
                            <TableCell align="center">Ответы</TableCell>
                            <TableCell align="center">Последнее обновление</TableCell>
                            <TableCell align="center">Оценка</TableCell>
                            <TableCell align="center">Действия</TableCell>
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

                                <ColumnActions card={el}/>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginator
                idCurrentPack={arrayCards[0]?.cardsPack_id}  /*айдишка колоды одинаковая в любой карточке из массива карточек*/
                countWithServerItems={countWithServerItems}
                countItemsForOnePage={countItemsForOnePage}
                numberPageWithServer={numberPageWithServer}/>
            {!arrayCards.length&&<div className={st.error}>В данной колоде нет карточек удовлетворяющих поиску</div>}
        </div>
    );
}