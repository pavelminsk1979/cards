import st from "features/cards/pageCards/PageCards.module.css";
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {useDebounce} from "use-debounce";
import {cardActions, cardReducer, cardThunk} from "features/cards/cardSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {selectCurrentIdPack} from "features/cards/cardSelectors";

export const InputForSearchCards = () => {
    const dispatch = useAppDispatch();

    const currentIdPack = useSelector(selectCurrentIdPack)

    const [textInput, setTextInput] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.currentTarget.value)
    }

    const [cardQuestion]= useDebounce(textInput,2000)

    useEffect(()=>{
       /*  dispatch(cardActions.SetTextInputCardsInState({cardQuestion}))*/
    },[cardQuestion])


  return(
      <div>
          <div className={st.text}>
              Поиск
          </div>
          <input
              /*onKeyPress={onKeyPressHandler}*/
              onChange={onChangeHandler}
              value={textInput}
              className={st.input}
              type="text"/>

      </div>
  )
}