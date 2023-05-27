import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice, selectMyId,
    selectPackNameInput,
     selectSortPacks
} from "features/packs/packSelectors";
import st from "components/paginator/Paginator.module.css"
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import IconButton from "@mui/material/IconButton";
import  FastRewind from '@mui/icons-material/FastRewind';
import FastForward from '@mui/icons-material/FastForward';
import {cardThunk} from "features/cards/cardSlice";

type PropsType={
    numberPageWithServer:number
    countItemsForOnePage:number
    countWithServerItems:number
    idCurrentPack?:string
}


export const Pagingtor = ({numberPageWithServer,countItemsForOnePage,countWithServerItems,idCurrentPack}:PropsType) => {
    const dispatch = useAppDispatch();


    const packNameInput = useSelector(selectPackNameInput)

    const sortPacks = useSelector(selectSortPacks)

    const user_id = useSelector(selectMyId)

    let pageCountNumber = Math.ceil(countWithServerItems / countItemsForOnePage)
    /* количество страниц    в которое уместятся все пакеты--просто число */

    const arrayMinMaxCorrectValueSlice =
        useSelector(selectArrayMinMaxCorrectValueSlice)

    let arrayNumbers = []  /*чтобы отрисовать кнопки---их надо в масив поместить*/
    for (let i = 1; i <= pageCountNumber; i++) {
        arrayNumbers.push(i)
    }

    const onClickHandler = (page:number) => {
        if(idCurrentPack){
            dispatch(cardThunk.fetchCards({cardsPack_id:idCurrentPack,page}))
        } else {
            dispatch(packThunk.fetchPacks({page,packNameInput,
                min:arrayMinMaxCorrectValueSlice[0],
                max: arrayMinMaxCorrectValueSlice[1],sortPacks,user_id}))
        }
    }


    const sizeOnePart = 10 /* размер одной части кнопок*/
    const [part,setPart]=useState(1)

    const numberStartPart =(part-1)*sizeOnePart+1
    const numberFinishPart =part*sizeOnePart
    /*    у порции есть первое число с которой порция начинается
    и последнее число которым порция заканчивается*/

    const fetchActivePageHandler = (page:number) => {
        if(idCurrentPack){
            dispatch(cardThunk.fetchCards({cardsPack_id:idCurrentPack,page}))
        }else {
            dispatch(packThunk.fetchPacks({page,packNameInput,
                min:arrayMinMaxCorrectValueSlice[0],
                max: arrayMinMaxCorrectValueSlice[1],sortPacks,user_id}))
        }
    }  /*когда на стрелку нажал то пошел запрос за следующими  колодами*/

    const  onClickNextPart= () => {
        setPart(part+1)
        fetchActivePageHandler((part )*sizeOnePart+1)
    }
    const onClickReturnPart = () => {
        setPart(part-1)
        fetchActivePageHandler((part-1 )*sizeOnePart)
    }

    return (
        <div>
            <IconButton
                onClick={onClickReturnPart}>
                <FastRewind/>
            </IconButton>
            {
                arrayNumbers.filter(el=>el >=numberStartPart &&  el<=numberFinishPart).map(el => {
                    return (
                        <span key={el}
                            onClick={()=>onClickHandler(el)}
                            className={numberPageWithServer===el
                            ?st.activeNumber
                            :st.number
                        }>{el}</span>
                    )
                })
            }
            <IconButton
                onClick={onClickNextPart}>
                <FastForward/>
            </IconButton>
        </div>
    )
}