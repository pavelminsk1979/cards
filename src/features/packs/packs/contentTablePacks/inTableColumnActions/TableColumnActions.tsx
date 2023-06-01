import TableCell from "@mui/material/TableCell";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import * as React from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import st from 'features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css'


type TableColumnActionsType = {
    /*packId: string*/
    packUserId: string
    clickButtonUpdatePack:()=>void
}

export const TableColumnActions = ({clickButtonUpdatePack, packUserId}: TableColumnActionsType) => {
    const dispatch = useAppDispatch();

    const deletePackHandler = () => {
      /*  dispatch(packThunk.deletePack(/!*{id}*!/))*/
    }
/*

    const handlerButtonUpdatePack = () => {
        const flagModal:string = 'update'
        const openModallUpdatePack:boolean = true
        clickButtonUpdatePack(flagModal,openModallUpdatePack)

     /!*   const cardsPack:CardsPackType = {_id:id,
            name:'Супер-Пупер колода',
            user_name:'$$$$'}
        dispatch(packThunk.updatePack({cardsPack}))*!/
    }
*/

    return (
        packUserId === "64505ad094d2b62338730b93"

            ? <TableCell align="center">
                <School className={st.item}/>
                <BorderColor onClick={clickButtonUpdatePack}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={ deletePackHandler}/>
            </TableCell>

            : <TableCell align="center">
                <School className={st.item}/>
            </TableCell>
    )
}