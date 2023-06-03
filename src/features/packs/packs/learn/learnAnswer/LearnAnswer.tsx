
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import st from "./LearnAnswer.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {selectCards, selectPackName} from "features/cards/cardSelectors";
import {BlockOptionAnswer} from "features/packs/packs/learn/learnAnswer/blockOptionAnswer/BlockOptionAnswer";

export const LearnAnswer = () => {

    const packName = useSelector(selectPackName)

    const cardsCurrentPack = useSelector(selectCards)

    const handlerOnClick = () => {
      alert('hayQ!')
    }

    return (
        < >
            <LinkOnPagePacks/>
            <div className={st.common}>

                <div className={st.namePack}>Обучение : колода -  {packName}</div>

                <div className={st.blockAnswer}>
                    <div className={st.question}>ВОПРОС:{cardsCurrentPack[0].question}</div>
                    <div className={st.textCenter}> Количество попыток ответов на вопрос:7</div>
                    <div className={st.answer}>ОТВЕТ:{cardsCurrentPack[0].question}</div>
                    <div className={st.blockOptionAnswer}>
                        <BlockOptionAnswer/>
                    </div>
                    <button
                        onClick={handlerOnClick}
                        className={st.button}>
                        Перейти к следующему вопросу</button>
                </div>
            </div>
        </>
    )
}