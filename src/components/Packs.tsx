import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {Navigate} from "react-router-dom";


export const Packs = () => {
    const isLoggedIn = useSelector <RootState, boolean>(
        state => state.auth.isLoggedIn)


    if ( !isLoggedIn ) {
        return <Navigate to={'/login'}/>
    }

    return(
        <div>
            <h3>Packs</h3>
        </div>
    )
}