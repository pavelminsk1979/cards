import React from "react";
import st from  './AppBar.module.css'


export const AppBar = () => {
    return(
        <div className={st.common}>
            <div className={st.block}>
            <div >
                <div> школа для взрослых</div>
                <div className={st.bigTitle}> Знания за плечами не носить</div>
            </div>
            <div> кнопка </div>
            </div>
        </div>
    )
}