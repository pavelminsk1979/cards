import TableCell from "@mui/material/TableCell";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import * as React from "react";
import st from 'features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css'
import {CardPacksType} from "features/packs/packApi";




type TableColumnActionsType = {
    myIdForCheck:string|undefined
    currentPack: CardPacksType
    clickButtonUpdatePack:()=>void
    clickButtonDeletePack:()=>void
    clickButtonLearnPack:()=>void
}

export const TableColumnActions = ({clickButtonUpdatePack,clickButtonDeletePack, currentPack,clickButtonLearnPack,myIdForCheck}: TableColumnActionsType) => {


    return (
        currentPack.user_id === myIdForCheck

            ? <TableCell align="center">
                {currentPack.cardsCount > 0 &&<School
                    onClick={clickButtonLearnPack}
                    className={st.item}/>}
                {currentPack.cardsCount === 0 &&<School
                    className={st.item}/>}

                <BorderColor onClick={clickButtonUpdatePack}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={clickButtonDeletePack}/>
            </TableCell>

            : <TableCell align="center">
                {currentPack.cardsCount > 0 &&<School
                    onClick={clickButtonLearnPack}
                    className={st.item}/>}
                {currentPack.cardsCount === 0 &&<School
                    className={st.item}/>}
            </TableCell>
    )
}
