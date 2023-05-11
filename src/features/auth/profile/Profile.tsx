import React from "react";
import st from "./Profile.module.css";
import myFoto from "../../../image/myFoto.jpg";
import {authThunk} from "../authSlice";
import {useAppDispatch} from "../../../app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {LoginResponseType} from "../authApi";
import {Navigate} from "react-router-dom";


export const Profile = () => {
    const dispatch = useAppDispatch();
    const logOut = useSelector<RootState, null | LoginResponseType>(
        state => state.auth.profile)


    const onClickHandler = () => {
        dispatch(authThunk.logOut({}))
    }

    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }
    if (logOut === null) {
        return <Navigate to={'/'}/>
    }

    return (
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

                <div>
                    <button onClick={onClickHandler}
                            className={st.button}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}

