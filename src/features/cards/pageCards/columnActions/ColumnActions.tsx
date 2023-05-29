import School from "@mui/icons-material/School";
import st from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {CardType} from "features/cards/cardApi";
import {packThunk} from "features/packs/packSlice";
import {CardsPackType} from "features/packs/packApi";

type PropsType = {
    card: CardType
}

export const ColumnActions = ({card}: PropsType) => {

    const deletePackHandler = (id: string) => {
        /*dispatch(packThunk.deletePack({id}))*/
    }

    const updatePackHandler = (id: string) => {
        /*    const cardsPack:CardsPackType = {_id:id,
                name:'Супер-Пупер колода',
                user_name:'$$$$'}
            dispatch(packThunk.updatePack({cardsPack}))*/
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