import TableCell from "@mui/material/TableCell";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import * as React from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";
import st from 'features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css'
import { CardsPackType } from "features/packs/packApi";

type TableColumnActionsType = {
    packId: string
    packUserId: string
}

export const TableColumnActions = ({packId, packUserId}: TableColumnActionsType) => {
    const dispatch = useAppDispatch();

    const deletePackHandler = (id: string) => {
        dispatch(packThunk.deletePack({id}))
    }

    const updatePackHandler = (id: string) => {
        const cardsPack:CardsPackType = {_id:id,
            name:'Супер-Пупер колода',
            user_name:'$$$$'}
        dispatch(packThunk.updatePack({cardsPack}))
    }

    return (
        packUserId === "64505ad094d2b62338730b93"

            ? <TableCell align="center">
                <School className={st.item}/>
                <BorderColor onClick={()=>updatePackHandler(packId)}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={() => deletePackHandler(packId)}/>
            </TableCell>

            : <TableCell align="center">
                <School className={st.item}/>
            </TableCell>
    )
}