import React, {useState} from "react";
import st from './AppBar.module.css'
import {NavLink} from "react-router-dom";
import {selectIsLoggedIn} from "features/auth/authSelectors";
import {useSelector} from "react-redux";
import myFoto from "image/myFoto.jpg";


export const AppBar = () => {
const [valueLinkName,setValueLinkName]= useState(true)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }

    const onClickLinkName = () => {
        setValueLinkName(false)
    }
    const onClickLinkPacks = () => {
        setValueLinkName(true)
    }
    setTimeout(()=>{
        if(!isLoggedIn){
            setValueLinkName(true)}
    },100)


    return (
        <div className={st.common}>
            <div className={st.block}>
                <div>
                    <div> школа для взрослых</div>
                    <div className={st.bigTitle}> Знания за плечами не носить</div>
                </div>
                {isLoggedIn && valueLinkName
                    ? <div className={st.blockNameFoto}>
                        <NavLink
                            onClick={onClickLinkName}
                            className={st.linkName}
                            to={'/profile'}>
                            Павел</NavLink>
                        <div
                            className={st.fotoMy}
                            style={fotoMe}>
                        </div>
                    </div>
                    : isLoggedIn && !valueLinkName
                    ? <NavLink
                            onClick={onClickLinkPacks}
                            className={st.linkPacks}
                            to={'/packs'}>
                            Список КОЛОД</NavLink>

                    :<div className={st.linkCommon}>
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