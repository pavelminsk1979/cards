import {useAppDispatch} from "common/hooks/useAppDispatch";
import {ChangeEvent, useState} from "react";
import {PayloadPostRequestType, PayloadPutType} from "features/cards/cardApi";
import {cardThunk} from "features/cards/cardSlice";
import st from "./ModalUpdateCard.module.css";
import Close from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import * as React from "react";

type PropsType = {
    closeModal: (value: boolean) => void
    currentIdPack: string
    valuesForUpdateCard: {
        cardId: string,
        cardQuestion: string, cardAnswer: string
    }
}

export const ModalUpdateCard = ({closeModal, currentIdPack, valuesForUpdateCard}: PropsType) => {
    const dispatch = useAppDispatch();

    const [textQuestion, setTextQuestion] = useState(valuesForUpdateCard.cardQuestion)

    const [textAnswer, setTextAnswer] = useState(valuesForUpdateCard.cardAnswer)


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
        if (textQuestion.trim() && textAnswer.trim()) {
            const payload: PayloadPutType = {
                card: {
                    _id: valuesForUpdateCard.cardId,
                    question: textQuestion,
                    answer: textAnswer
                }
            }
            dispatch(cardThunk.updateCard({payload}))
            closeModal(false)
        }
    }

    return (
        <div className={st.common}>
            <div className={st.upperBlok}>
                <div className={st.title}>Редактировать карточку</div>
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
                    className={st.button}>Сохранить изменения
            </button>
        </div>
    )
}