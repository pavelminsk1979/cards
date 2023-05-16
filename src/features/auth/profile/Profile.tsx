import React from "react";
import st from "./Profile.module.css";
import myFoto from "../../../image/myFoto.jpg";
import {authThunk} from "../authSlice";
import {useSelector} from "react-redux";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {selectLogOut} from "../authSelectors";


export const Profile = () => {
    const dispatch = useAppDispatch();
    const logOut = useSelector(selectLogOut)


    const onClickHandler = () => {
        dispatch(authThunk.logOut())
    }

    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }
    if (logOut === null) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            <div className={st.link}>
            <NavLink
                className={st.linkText}
                to={'/packs'}>
                Список КОЛОД</NavLink>
            </div>
        <div className={st.common}>
            <div className={st.container}>
                <div className={st.title}>
                    Personal Information
                </div>
                <div className={st.fotoMe}
                     style={fotoMe}></div>
                <div className={st.name}>Pavel</div>

                <div className={st.mail}>
                    pavelminsk@mail.ru
                </div>

                <div className={st.linkEditProfile}>
                    <NavLink to={'/editProfile'}>
                        Edit PROFILE</NavLink>
                </div>

                <div>
                    <button onClick={onClickHandler}
                            className={st.button}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

