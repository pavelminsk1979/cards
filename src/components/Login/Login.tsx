import React from "react";
import {useAppDispatch} from "../../app/hooks";
import {authThunk} from "../../features/auth/authSlice";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import st from "./Login.module.css";
import {InputPassword} from "../InputPassword";


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

    return (
        <div className={st.common}>
            <div className={st.container}>
                <div>
                    <h2 className={st.title}>Sign in</h2>
                </div>
                <div>
                    <TextField
                        {...formik.getFieldProps('email')}
                        margin="normal"
                        label="email"
                        variant="standard"/>
                </div>
                <div>
                    <InputPassword/>
                </div>
                <div>
                    <FormControlLabel label={'Remember me'} control={
                        <Checkbox
                            {...formik.getFieldProps('rememberMe')}
                        />
                    }/>
                </div>
                <div>
                    <h5>Forgot Password?</h5>
                </div>
                <div>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </div>
                <div>
                    <h5>Don't hava an account</h5>
                </div>
                <div><h3>Sing up</h3></div>

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
