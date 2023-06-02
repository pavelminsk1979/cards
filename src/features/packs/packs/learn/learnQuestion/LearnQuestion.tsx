import st from "./LearnQuestion.module.css";
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";
import React from "react";

export const LearnQuestion = () => {
    return (
        < >
            <LinkOnPagePacks/>
            <div className={st.common}>

                <div className={st.namePack}>Имя Колоды:7657587575</div>

                <div className={st.blockQuestion}>
                    <div className={st.text}>ВОПРОС:97kghguythgjf</div>
                    <div className={st.textCenter}> Количество попыток ответов на вопрос:7</div>
                    <button className={st.button}> Показать ответ</button>
                </div>
            </div>
        </>
    )
}



