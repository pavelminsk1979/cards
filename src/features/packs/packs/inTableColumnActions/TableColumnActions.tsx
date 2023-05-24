import TableCell from "@mui/material/TableCell";
import School from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import Delete from "@mui/icons-material/Delete";
import * as React from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";

type TableColumnActionsType = {
    packId:string
}

export const TableColumnActions = (prors:TableColumnActionsType) => {
    const dispatch = useAppDispatch();

  const deleteHandler = (id:string) => {
    dispatch(packThunk.deletePack({id}))
  }
  return(
      <TableCell align="center">
        <School/>
        <BorderColor/>
        <Delete onClick={()=>deleteHandler(prors.packId)}/>
      </TableCell>
  )
}