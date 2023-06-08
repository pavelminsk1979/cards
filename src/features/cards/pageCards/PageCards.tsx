import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st from 'features/cards/pageCards/PageCards.module.css'
import {Paginator} from "components/paginator/Paginator";
import {useSelector} from "react-redux";
import {
    selectCardQuestion,
    selectCards,
    selectCountItemsForOnePage, selectCountWithServerItems, selectCurrentIdPack,
    selectNumberPageWithServer,
    selectPackName, selectValueSortCards
} from "features/cards/cardSelectors";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {cardActions, cardThunk} from "features/cards/cardSlice";
import {InputForSearchCards} from "features/cards/pageCards/inputForSearch/InputForSearchCards";
import {ColumnActions} from "features/cards/pageCards/columnActions/ColumnActions";
import {useParams} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import {BasicModal} from "components/basicModal/BasicModal";
import {ModalCreatCard} from "features/cards/pageCards/modalsCard/modalCreateCard/ModalCreateCard";
import {ModalUpdateCard} from "features/cards/pageCards/modalsCard/modalUpdateCard/ModalUpdateCard";
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import {ModalDeleteCard} from "features/cards/pageCards/modalsCard/modalDeleteCard/ModalDeleteCard";
import {Stars} from "features/cards/pageCards/stars/Stars";


export const PageCards = () => {
    const dispatch = useAppDispatch();

    const page = useSelector(selectNumberPageWithServer)

    const cardQuestion = useSelector(selectCardQuestion)

    const arrayCards = useSelector(selectCards)

    const packName = useSelector(selectPackName)

    const numberPageWithServer = useSelector(selectNumberPageWithServer)

    const countItemsForOnePage = useSelector(selectCountItemsForOnePage)

    const countWithServerItems = useSelector(selectCountWithServerItems)

    const currentIdPack = useSelector(selectCurrentIdPack)

    const sortCards = useSelector(selectValueSortCards)

    const {id} = useParams()


    useEffect(() => {
        if (id) {
            dispatch(cardThunk.fetchCards({cardsPack_id: id,pageCount:5}))
        }
    }, [page, cardQuestion, sortCards])


    const titlePlasNamePack = `Наименование Колоды : ${packName}`

    const [arrowDirection, setArrowDirection] = useState(true)

    const onClickArrowHandler = () => {
        setArrowDirection(!arrowDirection)
        let sortCards: string = 0 + 'updated'
        if (arrowDirection) {
            sortCards = 1 + 'updated'
        }
        dispatch(cardActions.SetValueSortCards({sortCards}))
    }

    const [positionModal, setPositionModal] = useState(false);
    const [flagModal, setFlagModal] = useState('') /*какая из трех модалок покажется */
    const [valuesForUpdateAndDeleteCard,setValue]=useState({cardId:'',
        cardQuestion:'',cardAnswer:''})

    const clickButtonCreatCard = () => {
        setPositionModal(true)
        setFlagModal('create')
    }
    const clickButtonUpdateCard = (cardId:string,cardQuestion:string,cardAnswer:string) => {
        setPositionModal(true)
        setFlagModal('update')
        setValue({...valuesForUpdateAndDeleteCard,cardId,cardQuestion,cardAnswer})
    }
    const clickButtonDeleteCard = (cardId:string) => {
        setPositionModal(true)
        setFlagModal('delete')
        setValue({...valuesForUpdateAndDeleteCard,cardId})
    }

    return (
        <div className={st.common}>

            <BasicModal
                closeModal={setPositionModal}
                openModal={positionModal}>
                {flagModal === 'create' && <ModalCreatCard
                    currentIdPack={currentIdPack}
                    closeModal={setPositionModal}/>}

                {flagModal === 'update' && <ModalUpdateCard
                    valuesForUpdateCard={valuesForUpdateAndDeleteCard}
                    currentIdPack={currentIdPack}
                    closeModal={setPositionModal}/>}

                {flagModal === 'delete' && <ModalDeleteCard
                    valuesForDeleteCard={valuesForUpdateAndDeleteCard}
                    closeModal={setPositionModal}/>}

            </BasicModal>

            <LinkOnPagePacks/>

            <div className={st.blokNameAndButton}>
                <div className={st.title}>{titlePlasNamePack}</div>
                <button onClick={clickButtonCreatCard}
                        className={st.button}>
                    Добавить карточку
                </button>
            </div>

            <InputForSearchCards/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow className={st.tableHead}>
                            <TableCell>Вопрсы</TableCell>
                            <TableCell align="center">Ответы</TableCell>

                            <TableCell
                                align="center">
                                Последнее обновление
                                <IconButton
                                    size={"large"}
                                    onClick={onClickArrowHandler}>
                                    {arrowDirection
                                        ? <ArrowCircleUp/>
                                        : <ArrowCircleDown/>}
                                </IconButton>
                            </TableCell>

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
                                <Stars grade={el.grade}/>


                                <ColumnActions card={el}
                                               clickButtonUpdateCard={()=>clickButtonUpdateCard(el._id,el.question,el.answer)}
                                               clickButtonDeleteCard={()=>clickButtonDeleteCard(el._id)}/>

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
            {!arrayCards.length && <div className={st.error}>В данной колоде нет карточек удовлетворяющих поиску</div>}
        </div>
    );
}