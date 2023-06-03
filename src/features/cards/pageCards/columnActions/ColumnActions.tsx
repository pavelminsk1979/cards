import School from "@mui/icons-material/School";
import st from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {CardType} from "features/cards/cardApi";
import {useSelector} from "react-redux";
import {selectMyIdForCheck} from "features/packs/packSelectors";
import Coffee from "@mui/icons-material/Coffee";



type PropsType = {
    card: CardType
    clickButtonUpdateCard:()=>void
    clickButtonDeleteCard:()=>void
}

export const ColumnActions = ({card,clickButtonUpdateCard,clickButtonDeleteCard}: PropsType) => {

    const myIdForCheck = useSelector(selectMyIdForCheck)


    return (
        card.user_id === myIdForCheck
            ? <TableCell align="center">
                <BorderColor onClick={clickButtonUpdateCard}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={clickButtonDeleteCard}/>
            </TableCell>
            : <TableCell align="center">
            <Coffee onClick={()=>alert('Вам сколько порций сахара в кофе?')}/>
            </TableCell>
    )
}