import {RootState} from "store/store";




export const selectLogOut = (state:RootState) =>state.auth.profile


export const selectIsLoggedIn = (
    state:RootState) =>state.auth.isLoggedIn


export const selectFlagForgotPassword = (state:RootState) =>state.auth.flagForgotPassword


export const selectEditName = (
    state:RootState) =>state.auth.profile?.name


export const selectFlagSetNewPassword = (
    state:RootState) =>state.auth.flagSetNewPassword




