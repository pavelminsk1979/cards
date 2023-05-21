
import   React from 'react';
import st from "./AddNewCard.module.css"
import {LinkOnPacks} from "components/linkOnPacks/linkOnPacks";


export const AddNewCard = () => {
    return(
        <div className={st.common}>
            <LinkOnPacks/>
            <div className={st.namePack}>
                Имя Колоды
            </div>
            <div className={st.blokTextAndButton}>
            <div className={st.text}>
                Для добавления в эту колоду новую карточку нажми
            </div>
            <button className={st.buttonAdd}> Добавить КАРТОЧКУ</button>
            </div>
        </div>
    )
}