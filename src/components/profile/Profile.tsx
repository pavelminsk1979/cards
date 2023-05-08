
import React from "react";
import st from "./Profile.module.css";
import myFoto from "../../image/myFoto.jpg";



export const Profile = () => {
    /*const dispatch = useAppDispatch();*/


    const onClickHandler = () => {
        alert('Log Out');
    }

    const fotoMe = {
        backgroundImage: `url(${myFoto})`,
    }

    return (
        <div className={st.common}>
            <div className={st.container}>
                <div className={st.title}>
                    Personal Information
                </div>
                <div className={st.fotoMe}
                     style={fotoMe}></div>
                <div className={st.name}>Pavel</div>

                <div className={st.mail} >
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
    )
}



/*
import React from "react";


export const Profile = () => {
    return(
        <div>
            <h3>Profile</h3>
        </div>
    )
}*/
