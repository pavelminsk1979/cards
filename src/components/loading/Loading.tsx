import React from "react";
import st from "./Loading.module.css"

export const Loading = () => {
    return (
        <div className={ st.page}>
            <div className={st.loader}></div>
        </div>
    )
}