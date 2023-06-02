import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {NavLink} from "react-router-dom";
import {TableColumnActions} from "features/packs/packs/contentTablePacks/inTableColumnActions/TableColumnActions";
import * as React from "react";
import {CardPacksType} from "features/packs/packApi";
import st from "./ContentTablePacks.module.css";
import TableBody from "@mui/material/TableBody";


type PropsType={
    cardPacks:CardPacksType[]
    clickButtonUpdatePack:(packId:string,packName:string)=>void
}

export const ContentTablePacks = ({cardPacks,clickButtonUpdatePack}:PropsType) => {


    return(
      <TableBody className={st.tableBody}>
          {cardPacks.map((pack) => (
              <TableRow
                  key={pack._id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell component="th" scope="row">
                      {
                          pack.cardsCount||pack.user_id==='64505ad094d2b62338730b93'
                          ?  <NavLink
                              className={st.namePack}
                              to={'/pageCards/'+pack._id}>{pack.name}</NavLink>
                          :  <div
                              className={st.namePack}>{pack.name}</div>
                          }

                  </TableCell>
                  <TableCell align="center">{pack.cardsCount}</TableCell>
                  <TableCell align="center">{pack.updated}</TableCell>
                  <TableCell align="center">{pack.user_name}</TableCell>

                  <TableColumnActions
                      clickButtonUpdatePack={()=>clickButtonUpdatePack(pack._id,pack.name)}
                      packUserId={pack.user_id}/>
              </TableRow>
          ))}
      </TableBody>
  )
}