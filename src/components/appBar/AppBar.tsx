import React from "react";
import st from './AppBar.module.css'
import {NavLink} from "react-router-dom";
import {selectIsLoggedIn} from "features/auth/authSelectors";
import {useSelector} from "react-redux";
import {BlockAvatarSelect} from "components/appBar/blockAvatarSelect/BlockAvatarSelect";


export const AppBar = () => {


    const isLoggedIn = useSelector(selectIsLoggedIn)


    return (
        <div className={st.common}>
            <div className={st.block}>
                <div>
                    <div> школа для взрослых</div>
                    <div className={st.bigTitle}> Знания за плечами не носить</div>
                </div>
                {isLoggedIn
                    ? <div className={st.blockNameFoto}>
                        <NavLink
                            className={st.linkName}
                            to={'/profile'}>
                            Павел</NavLink>

                        <BlockAvatarSelect/>
                    </div>

                    : <div className={st.linkCommon}>
                        <NavLink
                            className={st.linkText}
                            to={'/login'}>
                            Sing in</NavLink>
                    </div>
                }

            </div>
        </div>
    )
}