import TableCell from "@mui/material/TableCell";
import React, {useState} from "react";
import TableRow from "@mui/material/TableRow";
import st from "features/packs/packs/Packs.module.css";
import IconButton from "@mui/material/IconButton";

import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice,
    selectPackNameInput,
    selectPage,
    selectSortPacks
} from "features/packs/packSelectors";

export const TableHeaders = () => {
    const dispatch = useAppDispatch();

    const page = useSelector(selectPage)

    const packNameInput = useSelector(selectPackNameInput)

    const sortPacks = useSelector(selectSortPacks)

    const arrayMinMaxCorrectValueSlice =
        useSelector(selectArrayMinMaxCorrectValueSlice)

type HeadersType = {
    id:number
    title:string
    align:"center" | "left" | "right" | "inherit" | "justify" | undefined
    arrowDirection:boolean
    fieldFromType:string
}

    const [arrayHeaders,setArrayHeaders] = useState<HeadersType[]>([
        {id:1,title:'Наименование Колоды',align:'left',arrowDirection:true,fieldFromType:'name'},
        {id:2,title:'Карточки',align:'center',arrowDirection:true,fieldFromType:'cardsCount'},
        {id:3,title:'Последнее обновление',align:'center',arrowDirection:true,fieldFromType:'updated'},
        {id:4,title:'Автор',align:'center',arrowDirection:true,fieldFromType:'user_name'},
    ])

    const onClickArrowHandler = (id:number,valueArrowDirection:boolean,fieldFromType:string) => {
        setArrayHeaders(arrayHeaders.map(e=>e.id===id?{...e,arrowDirection:!valueArrowDirection}:e))
        let sortPacks:string=0+fieldFromType
        if(valueArrowDirection){
            sortPacks=1+fieldFromType
        }
        dispatch(packThunk.fetchPacks({page,packNameInput,
            min:arrayMinMaxCorrectValueSlice[0],
            max: arrayMinMaxCorrectValueSlice[1],sortPacks}))
    }


  return(
      <TableRow className={st.tableHead}>
          {
              arrayHeaders.map(el=>{
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
                                  ? <ArrowCircleDown/>
                                  : <ArrowCircleUp/>}
                          </IconButton>
                      </TableCell>
                  )
              })
          }
          <TableCell align="center">Действия</TableCell>

      </TableRow>
  )
}