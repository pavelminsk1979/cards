import st from "components/learn/learnQuestion/LearnQuestion.module.css";
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import React from "react";
import {useSelector} from "react-redux";
import {selectCards, selectPackName} from "features/cards/cardSelectors";
import {Navigate, useNavigate} from "react-router-dom";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {cardActions} from "features/cards/cardSlice";



export const LearnQuestion = () => {

    const dispatch = useAppDispatch();

    const packName = useSelector(selectPackName)

    const cardsCurrentPack = useSelector(selectCards)

    const navigate = useNavigate()


    const randomNumber:number = (Math.floor(Math.random()*cardsCurrentPack.length))
    const f =() => {

      return cardsCurrentPack[randomNumber]?.question
    }

    const handlerOnClick = () => {
        dispatch(cardActions.SetRandomeNumberForLearnCard({randomNumber}))
        navigate('/learnAnswer')

    }

    if(cardsCurrentPack.length===0){
        return <Navigate to={'/packs'}/>
    }
    return (
        < >
            <LinkOnPagePacks/>
            <div className={st.common}>

                <div className={st.namePack}>Обучение : колода -  {packName}</div>

                <div className={st.blockQuestion}>
                    <div className={st.text}>ВОПРОС:{ f()}</div>
                    <div className={st.textCenter}> Количество попыток ответов на вопрос:7</div>
                    <button
                        onClick={handlerOnClick}
                        className={st.button}>
                        Показать ответ</button>
                </div>
            </div>
        </>
    )
}



