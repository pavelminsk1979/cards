import {useAppDispatch} from "common/hooks/useAppDispatch";
import st from "features/packs/packs/modals/modalDetetePack/ModalDetetePack.module.css";
import Close from "@mui/icons-material/Close";
import * as React from "react";
import {cardThunk} from "features/cards/cardSlice";

type PropsType = {
    valuesForDeleteCard:{
        cardId: string,
        cardQuestion: string, cardAnswer: string
    }
    closeModal: (value: boolean) => void
}

export const ModalDeleteCard = ({closeModal,valuesForDeleteCard}: PropsType) => {
    const dispatch = useAppDispatch();


    const handlerCloseModal = () => {
        closeModal(false)
    }

    const handlerDeletePack = () => {
        dispatch(cardThunk.deleteCard({id:valuesForDeleteCard.cardId}))
        closeModal(false)

    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Удалить карточку</div>
                <Close onClick={handlerCloseModal}/>
            </div>

            <div className={st.text}>Вы действительно хотите удалить эту прекрасную карточку? Её невозможно будет никогда уже востановить!</div>

            <button onClick={handlerDeletePack}
                    className={st.button}>DELETE</button>
        </div>
    )
}