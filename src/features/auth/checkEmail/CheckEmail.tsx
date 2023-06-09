
import React from "react";
import st from "./CheckEmail.module.css";
import mailImage from "../../../image/mail1.png";



export const CheckEmail = () => {
    /*const dispatch = useAppDispatch();*/


const onClickHandler = () => {
   /* alert('Check Email');*/
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
                        pavelminsk1979@mail.ru
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

