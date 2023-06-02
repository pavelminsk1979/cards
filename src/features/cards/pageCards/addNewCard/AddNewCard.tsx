
import   React from 'react';
import st from "features/cards/pageCards/addNewCard/AddNewCard.module.css"
import {LinkOnPagePacks} from "components/linkOnPagePacks/LinkOnPagePacks";



export const AddNewCard = () => {
    return(
        <div className={st.common}>
            <LinkOnPagePacks/>
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