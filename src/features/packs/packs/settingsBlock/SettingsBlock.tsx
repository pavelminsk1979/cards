import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import st from 'features/packs/packs/settingsBlock/SettingsBlock.module.css'
import Button from "@mui/material/Button";
import { RangeSlider } from 'features/packs/packs/settingsBlock/rangeSlider/RangeSlider';
import {packActions, packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice, selectArrayMinMaxValueSlice, selectFlagResetSlider,
    selectMyId,
    selectPage,
    selectSortPacks
} from "features/packs/packSelectors";


export const SettingsBlock = () => {
    const dispatch = useAppDispatch();

    const [valueButton, setValueButton] = useState('all')
    const [packNameInput, setPackNameInput] = useState('')


    const flagResetSlider = useSelector(selectFlagResetSlider)

    const page = useSelector(selectPage)

    const user_id = useSelector(selectMyId)

    const sortPacks = useSelector(selectSortPacks)

    const arrayMinMaxCorrectValueSlice =
        useSelector(selectArrayMinMaxCorrectValueSlice)


    /*МОЯ АЙДИШКА packUserId === "64505ad094d2b62338730b93"*/
    const onClickHandler = (value: string) => {
        setValueButton(value)
        if(value==='my'){

        }
        const user_id = "64505ad094d2b62338730b93"
        dispatch(packThunk.fetchPacks({
            page,
            packNameInput,
            min:arrayMinMaxCorrectValueSlice[0],
            max: arrayMinMaxCorrectValueSlice[1],
            sortPacks,
            user_id: value=== 'my' ? user_id : ''}))
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPackNameInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(packThunk.fetchPacks({page,packNameInput,
                min:arrayMinMaxCorrectValueSlice[0],
                max: arrayMinMaxCorrectValueSlice[1],sortPacks,user_id}))
        }
    }

    const resetHandler = () => {
        dispatch(packActions.resetDataTableHeadersPacks())
        dispatch(packActions.changeFlagResetSlider({flagResetSlider}))
        dispatch(packThunk.fetchPacks({}))
        setPackNameInput('')
        setValueButton('all')
    }

/*CMОТРЕТЬ по  ЗАМЫКАНИЮ   где и откуда берутся значения для переменных*/
    return (
        <div className={st.common}>
            <div>
                <div className={st.text}>
                    Поиск
                </div>
                <input
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeHandler}
                    value={packNameInput}
                    className={st.input}
                    type="text"/>

            </div>
            <div>
                <div className={st.text}>
                    Показать колоды карточек
                </div>

                <Button sx={{width: 100, ml: 3}}
                        onClick={() => onClickHandler('my')}
                        size={"large"}
                        variant={valueButton === 'my' ? "contained" : "outlined"}>
                    Мои</Button>
                <Button sx={{width: 100}}
                        onClick={() => onClickHandler('all')}
                        size={"large"}
                        variant={valueButton === 'all' ? "contained" : "outlined"}>
                    Все</Button>
            </div>
            <div>
                <div className={st.text}>
                    Количество карточек
                </div>

                <div >
                    <RangeSlider/>
                </div>
            </div>
            <button onClick={resetHandler}
                className={st.button}>
                Сброс настроек
            </button>
        </div>
    )
}
/*

import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import st from 'features/packs/packs/settingsBlock/rangeSlider/RangeSlider.module.css'
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice,
    selectArrayMinMaxValueSlice, selectMyId, selectPackNameInput, selectPage, selectSortPacks
} from "features/packs/packSelectors";
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";


export function RangeSlider() {
    const dispatch = useAppDispatch();

    const arrayMinMaxValueSlice = useSelector(selectArrayMinMaxValueSlice)
    console.log(arrayMinMaxValueSlice)
    const аrrayMinMaxCorrectValueSlice = useSelector(selectArrayMinMaxCorrectValueSlice)

    const page = useSelector(selectPage)

    const sortPacks = useSelector(selectSortPacks)

    const packNameInput = useSelector(selectPackNameInput)

    const user_id = useSelector(selectMyId)


    const [value, setValue] = React.useState<number[]>([]);


    /!*useEffect(() => {
        if(аrrayMinMaxCorrectValueSlice[0] === 0){

            setValue(arrayMinMaxValueSlice)
        }
    }, [arrayMinMaxValueSlice])*!/

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);

    }

    const sendDataSlider = () => {
        dispatch(packThunk.fetchPacks({page, min: value[0], max: value[1],sortPacks,packNameInput,user_id}))
    }

    useEffect(() => {
        if (!value.length || value[0] === 0 && value[1] === 0) {
            setValue(arrayMinMaxValueSlice)
        }
    }, [arrayMinMaxValueSlice])


    return (
        <div className={st.slider}>
            <div className={st.value}>
                {value[0]}
            </div>
            <Box sx={{width: 250}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChangeCommitted={sendDataSlider}
                    onChange={handleChange}/>
            </Box>
            <div className={st.value}>
                {value[1]}
            </div>
        </div>
    );
}*/
