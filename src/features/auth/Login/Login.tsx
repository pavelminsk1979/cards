import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import st from "./Login.module.css";
import {NavLink} from "react-router-dom";
import {Navigate} from "react-router-dom";


type FormikErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = 'Password must be mure 3 simbols'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(authThunk.login(values))
            formik.resetForm()
        }
    })

   /* const forgotPasswordHandler = () => {
        return <Navigate to={'/forgotPassword'}/>
    }*/

    return (
        <div className={st.common}>
            <div className={st.container}>
                <div className={st.title}>
                   Sign in
                </div>
                <div >
                    <TextField
                        sx={{ width: '32ch' }}
                        {...formik.getFieldProps('email')}
                        margin="normal"
                        label="email"
                        variant="standard"/>
                </div>
                <div>
                    <TextField
                        sx={{ width: '32ch' }}
                        {...formik.getFieldProps('password')}
                        label="password"
                        variant="standard"
                        type="password"
                        margin="normal"/>
                </div>
                <div className={st.rememberMe}>
                    <FormControlLabel label={'Remember me'} control={
                        <Checkbox
                            {...formik.getFieldProps('rememberMe')}
                        />
                    }/>
                </div>
                <div className={st.forgotPassword}>
                    <NavLink to={'/forgotPassword'}>Forgot Password?</NavLink>

                </div>
                <div>
                    <button className={st.button}>
                       Sing In
                    </button>
                 {/*   <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>*/}
                </div>
                <div>
                    Don't have an account
                </div>
                <div >
                    <NavLink to={'/register'} className={st.singUp}> Sing up</NavLink>
                </div>

            </div>
        </div>
    )
}


/*
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
};*/
