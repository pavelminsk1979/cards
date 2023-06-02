import * as React from 'react';
import Close from "@mui/icons-material/Close";
import st from './ModalDetetePack.module.css'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {packThunk} from "features/packs/packSlice";


type PropsType = {
    stateForDeletPack:{ packId:string,packName:string}
    closeModal: (value: boolean) => void
}

export const ModalDeletePack = ({closeModal,stateForDeletPack}: PropsType) => {
    const dispatch = useAppDispatch();


    const handlerCloseModal = () => {
        closeModal(false)
    }

    const handlerDeletePack = () => {
        dispatch(packThunk.deletePack({id:stateForDeletPack.packId}))
            closeModal(false)

    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Удалить  колоду</div>
                <Close onClick={handlerCloseModal}/>
            </div>

            <div className={st.text}>Вы действительно хотите удалить эту прекрасную колоду? Её невозможно будет никогда уже востановить!</div>

            <button onClick={handlerDeletePack}
                    className={st.button}>DELETE</button>
        </div>
    )
}