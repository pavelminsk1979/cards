import React from "react";
import st from "features/auth/profile/editProfile/EditProfile.module.css";
import myFoto from "image/myFoto.jpg";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {authThunk} from "features/auth/authSlice";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {selectEditName, selectLogOut} from "features/auth/authSelectors";
import {LinkOnPacks} from "components/linkOnPacks/linkOnPacks";


type FormikErrorType = {
    name?: string
}

export const EditProfile = () => {
    const dispatch = useAppDispatch();
    const logOut = useSelector(selectLogOut)
    const editName = useSelector(selectEditName)

    const formik = useFormik({
        initialValues: {
            name: editName
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            /*alert(JSON.stringify(values));*/
            dispatch(authThunk.editProfile(values));
            formik.resetForm()
        }
    })


    const onClickHandler = () => {

        dispatch(authThunk.logOut())
    }

    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }

    if (logOut === null) {
        return <Navigate to={'/login'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <LinkOnPacks/>
            <div className={st.common}>
                <div className={st.container}>
                    <div className={st.title}>
                        Personal Information
                    </div>
                    <div className={st.fotoMe}
                         style={fotoMe}></div>
                    <div className={st.blockIputButton}>
                        <div>
                            <TextField
                                sx={{width: '27ch'}}
                                {...formik.getFieldProps('name')}
                                margin="normal"
                                label="name"
                                variant="standard"/>
                            {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{
                                formik.errors.name}</div>}
                        </div>
                        <div  >
                            <button
                                className={st.buttonSaveName}
                                type={'submit'}>
                                SAVE
                            </button>
                        </div>
                    </div>

                    <div className={st.mail}>
                        pavelminsk@mail.ru
                    </div>

                    <div>
                        <button onClick={onClickHandler}
                                className={st.button}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}