import React from "react";
import {useAppDispatch} from "../app/hooks";
import {authThunk} from "../features/auth/authSlice";



export type LoginType = {
    email: string
    password:string
    rememberMe: boolean
}


export const Login = () => {
    const dispatch = useAppDispatch();

    const loginHandler = () => {
        const payload:LoginType = {email:'pavelminsk1979@mail.ru',
            password:'1979@pav',rememberMe:true}
        dispatch(authThunk.login(payload));
    };

    return (
        <div >
            <h3>SignIn</h3>
            <button onClick={loginHandler}>logIn</button>
        </div>
    );
};