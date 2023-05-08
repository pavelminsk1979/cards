import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import st from "./CreateNewPassword.module.css";




type FormikErrorType = {
    password?: string,
}

export const CreateNewPassword = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 8) {
                errors.password = 'Password must be more 8 simbols'
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            /*dispatch(authThunk.login(values));*/
            formik.resetForm()
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={st.common}>
                <div className={st.container}>
                    <div className={st.title}>
                        Create new password
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

                    <div className={st.textLong}>
                      Create new password and we will send
                        you further instructions to email
                    </div>

                    <div>
                        <button type={'submit'}
                                className={st.button}>
                            Create new password
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}







/*
import React from "react";


export const CreateNewPassword = () => {
    return(
        <div>
            <h3>SetNewPassword</h3>
        </div>
    )
}*/