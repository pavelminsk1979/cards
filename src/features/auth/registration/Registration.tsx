import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import st from "./Registration.module.css";
import {NavLink} from "react-router-dom";



type FormikErrorType = {
    email?: string,
    password?: string,
    confirmPassword?: string,
}

export const Registration = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
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
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required'
            } else if (values.password!==values.confirmPassword) {
                errors.confirmPassword = 'Invalid password '
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            dispatch(authThunk.register(values));
            formik.resetForm()
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={st.common}>
                <div className={st.container}>
                    <div className={st.title}>
                        Sign Up
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
                    <div>
                        <TextField
                            sx={{ width: '32ch' }}
                            {...formik.getFieldProps('confirmPassword')}
                            label="confirmPassword"
                            variant="standard"
                            type="password"
                            margin="normal"/>
                        {formik.touched.confirmPassword &&formik.errors.confirmPassword&&<div style={
                            {color:'red'}}>{formik.errors.confirmPassword}</div>}
                    </div>

                    <div>
                        <button type={'submit'}
                                className={st.button}>
                            Sing Up
                        </button>
                    </div>
                    <div>
                        Already  have an account?
                    </div>
                    <div >
                        <NavLink to={'/login'} className={st.linkSingIn}> Sing In</NavLink>
                    </div>

                </div>
            </div>
        </form>
    )
}


