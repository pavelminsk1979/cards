import {useAppDispatch} from "common/hooks/useAppDispatch";
import {ChangeEvent, useState} from "react";
import st from "features/cards/pageCards/modalsCard/modalCreateCard/ModalCreateCard.module.css";
import Close from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {PayloadPostRequestType} from "features/cards/cardApi";
import {cardThunk} from "features/cards/cardSlice";

type PropsType = {
    closeModal: (value: boolean) => void
    currentIdPack:string
}

export const ModalCreatCard = ({closeModal,currentIdPack}: PropsType) => {
    const dispatch = useAppDispatch();

    const [textQuestion, setTextQuestion] = useState('')

    const [textAnswer, setTextAnswer] = useState('')


    const handlerTextQuestion = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTextQuestion(event.currentTarget.value)
    }

    const handlerTextAnswer = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTextAnswer(event.currentTarget.value)
    }

    const handlerCloseModal = () => {
        closeModal(false)
    }

    const handlerCreatePack = () => {
        if (textQuestion.trim()&&textAnswer.trim()) {
            const card: PayloadPostRequestType = {
                card: {
                    cardsPack_id: currentIdPack,
                    question: textQuestion,
                    answer: textAnswer,
                }
            }
            dispatch(cardThunk.createCard({card}))

            closeModal(false)
        }
    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Создать карточку</div>
                <Close onClick={handlerCloseModal}/>
            </div>
            <TextField sx={{m: 2, width: '35ch'}}
                       value={textQuestion}
                       onChange={handlerTextQuestion}
                       id="standard-basic"
                       label="Введите вопрос для новой карточки "
                       variant="standard"/>

            <TextField sx={{m: 2, width: '35ch'}}
                       value={textAnswer}
                       onChange={handlerTextAnswer}
                       id="standard-basic"
                       label="Введите ответ  для новой карточки "
                       variant="standard"/>


            <button onClick={handlerCreatePack}
                    className={st.button}>Создать
            </button>
        </div>
    )
}