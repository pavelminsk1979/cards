import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import st from 'features/packs/packs/settingsBlock/SettingsBlock.module.css'
import Button from "@mui/material/Button";
import { RangeSlider } from 'features/packs/packs/settingsBlock/rangeSlider/RangeSlider';
import {packThunk} from "features/packs/packSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {
    selectArrayMinMaxCorrectValueSlice,
    selectMyId,
    selectPage,
    selectSortPacks
} from "features/packs/packSelectors";


export const SettingsBlock = () => {
    const dispatch = useAppDispatch();

    const [valueButton, setValueButton] = useState('all')
    const [packNameInput, setPackNameInput] = useState('')

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