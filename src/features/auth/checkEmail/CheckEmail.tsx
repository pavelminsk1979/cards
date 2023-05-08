
import React from "react";
import {useAppDispatch} from "../../../app/hooks";
import st from "./CheckEmail.module.css";
import mailImage from "../../../image/mail1.png";



export const CheckEmail = () => {
    const dispatch = useAppDispatch();


const onClickHandler = () => {
    alert('Check Email');
}

    const mailFoto = {
        backgroundImage: `url(${mailImage})`,
    }

    return (
        <div className={st.common}>
                <div className={st.container}>
                    <div className={st.title}>
                        Check Email
                    </div>
                    <div className={st.mailFoto}
                        style={mailFoto}></div>

                    <div className={st.textLong}>
                       We've sent an Email with instructions to
                        example@mail.com
                    </div>

                    <div>
                        <button onClick={onClickHandler}
                                className={st.button}>
                            Back to login
                        </button>
                    </div>
                </div>
            </div>
    )
}

/*
import React from "react";


export const CheckEmail = () => {
    return(
        <div>
            <h3>CheckEmail</h3>
        </div>
    )
}*/
