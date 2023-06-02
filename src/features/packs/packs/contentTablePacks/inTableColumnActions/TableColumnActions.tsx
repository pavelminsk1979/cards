import TableCell from "@mui/material/TableCell";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import * as React from "react";
import st from 'features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions.module.css'




type TableColumnActionsType = {
    packUserId: string
    clickButtonUpdatePack:()=>void
    clickButtonDeletePack:()=>void
}

export const TableColumnActions = ({clickButtonUpdatePack,clickButtonDeletePack, packUserId}: TableColumnActionsType) => {


    const deletePackHandler = () => {
      /*  dispatch(packThunk.deletePack(/!*{id}*!/))*/
    }

    return (
        packUserId === "64505ad094d2b62338730b93"

            ? <TableCell align="center">
                <School className={st.item}/>
                <BorderColor onClick={clickButtonUpdatePack}
                             className={st.item}/>
                <Delete className={st.item}
                        onClick={clickButtonDeletePack}/>
            </TableCell>

            : <TableCell align="center">
                <School className={st.item}/>
            </TableCell>
    )
}
