import * as React from 'react';
import Close from "@mui/icons-material/Close";
import st from './ModalUpdatePack.module.css'
import TextField from "@mui/material/TextField";
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";
import {CardsPackType} from "features/packs/packApi";


type PropsType = {
    stateForUpdatePack:{ packId:string,packName:string}
    closeModal:(value:boolean)=>void
}

export const ModalUpdatePack = ({stateForUpdatePack,closeModal}: PropsType) => {
    const dispatch = useAppDispatch();

    const [title,setTitle] = useState(stateForUpdatePack.packName)

    const handlerTitleNewPack = (event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const handlerCloseModal = () => {
        closeModal(false)
    }
    const handlerCreatePack = () => {
        if(title.trim()){
            const cardsPack:CardsPackType = {_id:stateForUpdatePack.packId,
                name:title}
            dispatch(packThunk.updatePack({cardsPack}))
            closeModal(false)
        }
    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Сделайте новое имя для этой колоды</div>
                <Close onClick={handlerCloseModal}/>
            </div>
            <TextField sx={{m: 2, width: '35ch'}}
                       value={title}
                       onChange={handlerTitleNewPack}
                       id="standard-basic"
                       label="Введите новое имя "
                       variant="standard"/>

            <button onClick={handlerCreatePack}
                    className={st.button}>Сохранить</button>
        </div>
    )
}