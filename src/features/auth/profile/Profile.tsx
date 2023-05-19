import React from "react";
import st from "./Profile.module.css";
import myFoto from "../../../image/myFoto.jpg";
import {authThunk} from "../authSlice";
import {useSelector} from "react-redux";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {selectLogOut} from "../authSelectors";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import {ArrowBackPage} from "components/arrowBackPage/ArrowBackPage";


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
       <ArrowBackPage
           text='Список КОЛОД'
           path='/packs'/>
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

