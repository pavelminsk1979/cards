import * as React from 'react';
import Close from "@mui/icons-material/Close";
import st from './ModalCreatPack.module.css'
import TextField from "@mui/material/TextField";
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";


type PropsType = {
    closeModal: (value: boolean) => void
}

export const ModalCreatPack = ({closeModal}: PropsType) => {
    const dispatch = useAppDispatch();

    const [title,setTitle] = useState('')

    const handlerTitleNewPack = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
    }

    const handlerCloseModal = () => {
        closeModal(false)
    }

    const handlerCreatePack = () => {
        if(title.trim()){
            dispatch(packThunk.createPack({name:title}))
            closeModal(false)
        }
    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Добавить новую колоду</div>
                <Close onClick={handlerCloseModal}/>
            </div>
            <TextField sx={{m: 2, width: '35ch'}}
                       value={title}
                       onChange={handlerTitleNewPack}
                       id="standard-basic"
                       label="Введите имя новой колоды"
                       variant="standard"/>
            {/* <input  type="text"
                className={st.input}/>*/}

            <button onClick={handlerCreatePack}
                className={st.button}>Создать</button>
        </div>
    )
}