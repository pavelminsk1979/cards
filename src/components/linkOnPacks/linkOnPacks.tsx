import st from "components/linkOnPacks/linkOnPacks.module.css"
import IconButton from "@mui/material/IconButton";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import {useNavigate} from "react-router-dom";
import React from "react";



export const LinkOnPacks = () => {
    const navigate = useNavigate();

    const onClickKeyboardBackspace = () => {
        navigate ('/packs')
    }

    return(
        <div className={st.link}>
            <label>
                <IconButton
                    onClick={onClickKeyboardBackspace}
                    size={"small"}>
                    <KeyboardBackspace/>
                </IconButton>
                <span className={st.linkText}>Список КОЛОД</span>
            </label>
        </div>
    )
}