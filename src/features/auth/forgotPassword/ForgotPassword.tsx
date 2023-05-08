
import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import st from "./ForgotPassword.module.css";
import {NavLink} from "react-router-dom";



type FormikErrorType = {
    email?: string
}

export const ForgotPassword = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            /*alert(JSON.stringify(values));*/
           /* dispatch(authThunk.login(values));*/
            formik.resetForm()
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={st.common}>
                <div className={st.container}>
                    <div className={st.title}>
                       Forgot your password?
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
                    <div className={st.textLong}>
                        Enter your email address and we will
                        send you further instructions
                    </div>
                    <div>
                        <button type={'submit'}
                                className={st.button}>
                          Send instructions
                        </button>
                    </div>
                    <div>
                       Did you remember your password?
                    </div>
                    <div >
                        <NavLink to={'/'} className={st.linkLogging}> Try logging in</NavLink>
                    </div>
                </div>
            </div>
        </form>
    )
}


