import React from "react";
import st from  './AppBar.module.css'
import {NavLink} from "react-router-dom";


export const AppBar = () => {

    const onClickHundler = () => {

    }

    return(
        <div className={st.common}>
            <div className={st.block}>
            <div >
                <div> школа для взрослых</div>
                <div className={st.bigTitle}> Знания за плечами не носить</div>
            </div >
                <div className={st.linkCommon}>
                    <NavLink className={st.linkText}
                        to={'/'}>Sing in</NavLink>
                </div>


            </div>
        </div>
    )
}