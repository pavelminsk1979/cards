import School from "@mui/icons-material/School";
import st from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {CardType, PayloadPutType} from "features/cards/cardApi";
import {cardThunk} from "features/cards/cardSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {selectCurrentIdPack} from "features/cards/cardSelectors";

type PropsType = {
    card: CardType
}

export const ColumnActions = ({card}: PropsType) => {
    const dispatch = useAppDispatch();


    const deletePackHandler = (id: string) => {
        dispatch(cardThunk.deleteCard({id}))
    }

    const updatePackHandler = (id: string) => {
            const payload:PayloadPutType = {
                card: {
                    _id: id,
                    question: 'Обновленный вопрос'
                }
            }
            dispatch(cardThunk.updateCard({payload}))
    }

    return (
        card.user_id === "64505ad094d2b62338730b93"
            ? <TableCell align="center">
                <School className={st.item}/>
                <BorderColor onClick={() => updatePackHandler(card._id)}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={() => deletePackHandler(card._id)}/>
            </TableCell>
            : <TableCell align="center">
                <School className={st.item}/>
            </TableCell>
    )
}