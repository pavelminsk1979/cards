import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectPackNameInput, selectPacksState, selectPage, selectPageCount} from "features/packs/packSelectors";
import st from "components/paginator/Paginator.module.css"
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import IconButton from "@mui/material/IconButton";
import  FastRewind from '@mui/icons-material/FastRewind';
import FastForward from '@mui/icons-material/FastForward';


export const Pagingtor = () => {
    const dispatch = useAppDispatch();
    const cardPacksTotalCount = useSelector(selectPacksState).cardPacksTotalCount  /* количество
    пакетов на сервере   1800*/

    const pageCount = useSelector(selectPageCount)  /* я определил что с сервера придет
    10 пакетов */

    const page = useSelector(selectPage)

    const packNameInput = useSelector(selectPackNameInput)

    let pageCountNumber = Math.ceil(cardPacksTotalCount / pageCount)
    /* количество страниц    в которое уместятся все пакеты--просто число */

    let arrayNumbers = []  /*чтобы отрисовать кнопки---их надо в масив поместить*/
    for (let i = 1; i <= pageCountNumber; i++) {
        arrayNumbers.push(i)
    }

    const onClickHandler = (page:number) => {
        dispatch(packThunk.fetchPacks({page,packNameInput}))
    }


    const sizeOnePart = 10 /* размер одной части кнопок*/
    const [part,setPart]=useState(1)

    const numberStartPart =(part-1)*sizeOnePart+1
    const numberFinishPart =part*sizeOnePart
    /*    у порции есть первое число с которой порция начинается
    и последнее число которым порция заканчивается*/

    const fetchActivePageHandler = (page:number) => {
        dispatch(packThunk.fetchPacks({page}))
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
                            className={page===el
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