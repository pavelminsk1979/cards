import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import {authThunk} from "../authSlice";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import st from "./CreateNewPassword.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Navigate, useParams} from "react-router-dom";




type FormikErrorType = {
    password?: string,
}

export const CreateNewPassword = () => {
    const dispatch = useAppDispatch();
    const flagSetNewPassword = useSelector<RootState, boolean>(
        state=>state.auth.flagSetNewPassword)
const {id} = useParams()
    console.log(id)
    const formik = useFormik({
        initialValues: {
            password: '',
            resetPasswordToken:id
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
            dispatch(authThunk.setNewPassword(values));
            formik.resetForm()
        }
    })

    if(flagSetNewPassword){
        return <Navigate to={'/login'}/>
    }
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


