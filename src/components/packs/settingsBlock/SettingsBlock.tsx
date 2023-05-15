import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import st from './SettingsBlock.module.css'
import Button from "@mui/material/Button";
import {RangeSlider} from "components/packs/settingsBlock/RangeSlider";




export const SettingsBlock = () => {
    const [valueButton, setValueButton] = useState('all')
    const [textInput, setTextInput] = useState('')

    const onClickHandler = (value: string) => {
        setValueButton(value)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTextInput('')
            /* ОТСЮда текс из инпута передавать дальше*/
        }
    }

    return (
        <div className={st.common}>
            <div>
                <div>
                    Поиск
                </div>
                <input
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeHandler}
                    value={textInput}
                    className={st.input}
                    type="text"/>

            </div>
            <div>
                <div>
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
                <div>
                    Количество карточек
                </div>

                <div >
                    <RangeSlider/>
                </div>
            </div>
            <button className={st.button}>
                Сброс настроек
            </button>
        </div>
    )
}