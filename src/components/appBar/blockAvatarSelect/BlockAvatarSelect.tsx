import st from "./BlockAvatarSelect.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {selectAvatar} from "features/auth/authSelectors";
import {authThunk} from "features/auth/authSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";



export const BlockAvatarSelect = () => {
    const dispatch = useAppDispatch();
    const avatar = useSelector(selectAvatar)

    const fotoMe = {
        backgroundImage: `url(${avatar})`
    }
    const handlerLogOut = () => {
        dispatch(authThunk.logOut())
    }
  return(
      <div className={st.blockAvatarSelect}>
          <div
              className={st.fotoMy}
              style={fotoMe}>
          </div>
          <div className={st.select}>
              <NavLink to={'/profile'}>
                  PROFILE</NavLink>
              <NavLink onClick={handlerLogOut}
                  to={'/packs'}>
                  LOG OUT</NavLink>
          </div>

      </div>
  )
}