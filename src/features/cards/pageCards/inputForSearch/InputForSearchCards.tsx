import st from "features/cards/pageCards/PageCards.module.css";
import React, {ChangeEvent, useState} from "react";
import {cardActions} from "features/cards/cardSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";


export const InputForSearchCards = () => {
    const dispatch = useAppDispatch();

    /*const currentIdPack = useSelector(selectCurrentIdPack)*/

    const [textInput, setTextInput] = useState('')


    const [timerId, setTimerId] = useState<number | undefined>(undefined)


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setTextInput(value)
        if (timerId) {
            clearTimeout(timerId)
        }
        const id = +setTimeout(() => {

            dispatch(cardActions.SetTextInputCardsInState({cardQuestion:value}))
            setTimerId(undefined)
        }, 2000)
        setTimerId(id)
    }



  return(
      <div>
          <div className={st.text}>
              Поиск
          </div>
          <input
              onChange={onChangeHandler}
              value={textInput}
              className={st.input}
              type="text"/>

      </div>
  )
}