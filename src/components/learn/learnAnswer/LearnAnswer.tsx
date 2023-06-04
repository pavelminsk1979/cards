
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import st from "components/learn/learnAnswer/LearnAnswer.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {selectCards, selectPackName, selectRandomNumberForLearnCard} from "features/cards/cardSelectors";
import {BlockOptionAnswer} from "components/learn/learnAnswer/blockOptionAnswer/BlockOptionAnswer";
import {useNavigate} from "react-router-dom";
import {cardActions} from "features/cards/cardSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";


export const LearnAnswer = () => {

    const dispatch = useAppDispatch();

    const packName = useSelector(selectPackName)

    const cardsCurrentPack = useSelector(selectCards)

    const randomNumber= useSelector(selectRandomNumberForLearnCard)

    const navigate = useNavigate()


    const handlerOnClick = () => {
        dispatch(cardActions.RemoveShowedCard({idCard:cardsCurrentPack[randomNumber]._id}))
        navigate('/learn')
    }

    return (
        < >
            <LinkOnPagePacks/>
            <div className={st.common}>

                <div className={st.namePack}>Обучение : колода -  {packName}</div>

                <div className={st.blockAnswer}>
                    <div className={st.question}>ВОПРОС:{cardsCurrentPack[randomNumber].question}</div>
                    <div className={st.textCenter}> Количество попыток ответов на вопрос:7</div>
                    <div className={st.answer}>ОТВЕТ:{cardsCurrentPack[randomNumber].answer}</div>
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