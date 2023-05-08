import React from "react";
import st from "./EditProfile.module.css";
import myFoto from "../../image/myFoto.jpg";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";


type FormikErrorType = {
    NickName?: string
}

export const EditProfile = () => {
    /*const dispatch = useAppDispatch();*/


    const formik = useFormik({
        initialValues: {
            NickName: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.NickName) {
                errors.NickName = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            /* dispatch(authThunk.login(values));*/
            formik.resetForm()
        }
    })


    const onClickHandler = () => {
        alert('Log Out');
    }

    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }

    return (
        <form onSubmit={formik.handleSubmit}>
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
                                {...formik.getFieldProps('NickName')}
                                margin="normal"
                                label="NickName"
                                variant="standard"/>
                            {formik.touched.NickName && formik.errors.NickName && <div style={{color: 'red'}}>{
                                formik.errors.NickName}</div>}
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