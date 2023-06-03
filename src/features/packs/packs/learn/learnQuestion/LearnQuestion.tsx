import st from "./LearnQuestion.module.css";
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import React from "react";
import {useSelector} from "react-redux";
import {selectCards, selectPackName} from "features/cards/cardSelectors";
import {useNavigate} from "react-router-dom";

export const LearnQuestion = () => {

    const packName = useSelector(selectPackName)

    const cardsCurrentPack = useSelector(selectCards)

    const navigate = useNavigate()

    const handlerOnClick = () => {
      navigate('/learnAnswer')
    }

    return (
        < >
            <LinkOnPagePacks/>
            <div className={st.common}>

                <div className={st.namePack}>Обучение : колода -  {packName}</div>

                <div className={st.blockQuestion}>
                    <div className={st.text}>ВОПРОС:{cardsCurrentPack[0].question}</div>
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



