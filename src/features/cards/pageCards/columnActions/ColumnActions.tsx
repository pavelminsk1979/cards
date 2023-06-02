import School from "@mui/icons-material/School";
import st from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {CardType} from "features/cards/cardApi";
import {useAppDispatch} from "common/hooks/useAppDispatch";


type PropsType = {
    card: CardType
    clickButtonUpdateCard:()=>void
    clickButtonDeleteCard:()=>void
}

export const ColumnActions = ({card,clickButtonUpdateCard,clickButtonDeleteCard}: PropsType) => {
    const dispatch = useAppDispatch();


/*    const deletePackHandler = (id: string) => {
        dispatch(cardThunk.deleteCard({id}))
    }*/


    return (
        card.user_id === "64505ad094d2b62338730b93"
            ? <TableCell align="center">
                <School className={st.item}/>
                <BorderColor onClick={clickButtonUpdateCard}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={clickButtonDeleteCard}/>
            </TableCell>
            : <TableCell align="center">
                <School className={st.item}/>
            </TableCell>
    )
}