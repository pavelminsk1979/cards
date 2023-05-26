import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {NavLink} from "react-router-dom";
import {TableColumnActions} from "features/packs/packs/inTableColumnActions/TableColumnActions";
import * as React from "react";
import {CardPacksType} from "features/packs/packApi";
import st from "./ContentTablePacks.module.css";
import TableBody from "@mui/material/TableBody";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {cardThunk} from "features/cards/cardSlice";

type PropsType={
    cardPacks:CardPacksType[]
}

export const ContentTablePacks = ({cardPacks}:PropsType) => {
    const dispatch = useAppDispatch();

    const onClickHandler = (cardsPack_id:string) => {
     dispatch(cardThunk.fetchCards({cardsPack_id}))
    }

  return(
      <TableBody className={st.tableBody}>
          {cardPacks.map((pack) => (
              <TableRow
                  key={pack._id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell component="th" scope="row">

                      <NavLink onClick={()=>onClickHandler(pack._id)}
                          className={st.namePack}
                          to={'/contentOnePack'}>{pack.name}</NavLink>

                  </TableCell>
                  <TableCell align="center">{pack.cardsCount}</TableCell>
                  <TableCell align="center">{pack.updated}</TableCell>
                  <TableCell align="center">{pack.user_name}</TableCell>
                  <TableColumnActions packUserId={pack.user_id}
                                      packId={pack._id}/>
              </TableRow>
          ))}
      </TableBody>
  )
}