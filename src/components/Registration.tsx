import React from "react";
import {useAppDispatch} from "../app/hooks";
import {authThunk} from "../features/auth/authSlice";



export type RegisterType = {
    email:string
    password:string
}

export const Registration = () => {
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        const payload:RegisterType = {email:'pavelminsk1979@mail.ru',
            password:'1979@pav'}
        dispatch(authThunk.register(payload));
    };

    return (
        <div >
            <h3>SignUp</h3>
            <button onClick={registerHandler}>SignUp</button>
        </div>
    );
};