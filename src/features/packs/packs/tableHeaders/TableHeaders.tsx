import TableCell from "@mui/material/TableCell";
import React, {useState} from "react";
import TableRow from "@mui/material/TableRow";
import st from "features/packs/packs/Packs.module.css";
import IconButton from "@mui/material/IconButton";

import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import {packActions, packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice, selectDataTableHeadersPacks, selectMyId,
    selectPackNameInput,
    selectPage,
    selectSortPacks
} from "features/packs/packSelectors";

export const TableHeaders = () => {
    const dispatch = useAppDispatch();

    const page = useSelector(selectPage)

    const packNameInput = useSelector(selectPackNameInput)

    const arrayMinMaxCorrectValueSlice =
        useSelector(selectArrayMinMaxCorrectValueSlice)

    const user_id = useSelector(selectMyId)

    const DataTableHeadersPacks = useSelector(selectDataTableHeadersPacks)



    const onClickArrowHandler = (id:number,valueArrowDirection:boolean,fieldFromType:string) => {
dispatch(packActions.setNewDataTableHeadersPacks({
    id, valueArrowDirection}))
        let sortPacks:string=0+fieldFromType
        if(valueArrowDirection){
            sortPacks=1+fieldFromType
        }
        dispatch(packThunk.fetchPacks({page,packNameInput,
            min:arrayMinMaxCorrectValueSlice[0],
            max: arrayMinMaxCorrectValueSlice[1],sortPacks,user_id}))
    }


  return(
      <TableRow className={st.tableHead}>
          <TableCell align="left">Обложка</TableCell>
          {
              DataTableHeadersPacks.map(el=>{
                  return(
                      <TableCell
                          key={el.id}
                          align={el.align} >
                          {el.title}

                          <IconButton
                              size={"large"}
                              onClick={()=>onClickArrowHandler(
                                  el.id,el.arrowDirection,el.fieldFromType)}>
                              {el.arrowDirection
                                  ? <ArrowCircleUp/>
                                  : <ArrowCircleDown/>}
                          </IconButton>
                      </TableCell>
                  )
              })
          }
          <TableCell align="center">Действия</TableCell>

      </TableRow>
  )
}