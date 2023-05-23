import React from "react";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import st from "./Login.module.css";
import {Navigate, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {selectIsLoggedIn} from "../authSelectors";



type FormikErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useAppDispatch();

     const isLoggedIn = useSelector (selectIsLoggedIn)


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
            } else if (values.password.length < 8) {
                errors.password = 'Password must be more 8 simbols'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(authThunk.login(values));
            /*formik.resetForm()*/
        }
    })

     if ( isLoggedIn ) {
        return <Navigate to={'/packs'}/>
     }


    return (
        <form onSubmit={formik.handleSubmit}>
        <div className={st.common}>
            <div className={st.container}>
                <div className={st.title}>
                   Sign In
                </div>
                <div >
                    <TextField
                        sx={{ width: '32ch' }}
                        {...formik.getFieldProps('email')}
                        margin="normal"
                        label="email"
                        variant="standard"/>
                    {formik.touched.email &&formik.errors.email&&<div style={{color:'red'}}>{
                        formik.errors.email}</div>}
                </div>
                <div>
                    <TextField
                        sx={{ width: '32ch' }}
                        {...formik.getFieldProps('password')}
                        label="password"
                        variant="standard"
                        type="password"
                        margin="normal"/>
                    {formik.touched.password &&formik.errors.password&&<div style={
                        {color:'red'}}>{formik.errors.password}</div>}
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
                    <button type={'submit'}
                        className={st.button}>
                       Sing In
                    </button>
                </div>
                <div>
                    Don't have an account
                </div>
                <div >
                    <NavLink to={'/register'} className={st.singUp}> Sing up</NavLink>
                </div>

            </div>
        </div>
        </form>
    )
}


