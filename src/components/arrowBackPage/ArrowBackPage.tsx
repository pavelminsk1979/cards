import st from "./ArrowBackPage.module.css"
import IconButton from "@mui/material/IconButton";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";

type ArrowBackPageType = {
  path:string
    text:string
}

export const ArrowBackPage = (props:ArrowBackPageType) => {
  const navigate = useNavigate();

  const onClickKeyboardBackspace = () => {
    navigate(props.path)
  }
  return(
      <div className={st.link}>
        <IconButton
            onClick={onClickKeyboardBackspace}
            size={"small"}>
          <KeyboardBackspace/>
        </IconButton>
        <NavLink
            className={st.linkText}
            to={'/packs'}>
            {props.text}</NavLink>
      </div>
  )
}