
import   React from 'react';
import {ArrowBackPage} from "components/arrowBackPage/ArrowBackPage";
import st from "./AddNewCard.module.css"


export const AddNewCard = () => {
    return(
        <div className={st.common}>
            <ArrowBackPage
                text='Список КОЛОД'
                path='/packs'/>
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