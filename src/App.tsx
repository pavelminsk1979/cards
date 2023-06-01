import React, {useEffect} from "react";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Login} from "features/auth/Login/Login";
import {Registration} from "features/auth/registration/Registration";
import {CheckEmail} from "features/auth/checkEmail/CheckEmail";
import {CreateNewPassword} from "features/auth/createNewPassword/CreateNewPassword";
import {ForgotPassword} from "features/auth/forgotPassword/ForgotPassword";
import {Profile} from "features/auth/profile/Profile";
import {Packs} from "features/packs/packs/Packs";
import {Learn} from "components/Learn";
import st from 'App.module.css'
import {AppBar} from "components/appBar/AppBar";
import {EditProfile} from "features/auth/profile/editProfile/EditProfile";
import {appThunk} from "features/app/appSlice";
import {useSelector} from "react-redux";
import {Loading} from "components/loading/Loading";
import {GlobalError} from "common/globalError/GlobalError";
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import LinearProgress from "@mui/material/LinearProgress";
import {selectIsInitialized, selectStatusLoading} from "features/app/appSelectors";
import {AddNewCard} from "features/packs/addNewCard/AddNewCard";
import {PageCards} from "features/cards/pageCards/PageCards";
import {BasicModal} from "components/basicModal/BasicModal";


export const App = () => {
    const dispatch = useAppDispatch();

    const isInitialized = useSelector(selectIsInitialized)

    const statusLoading = useSelector(selectStatusLoading)

    useEffect(() => {
        dispatch(appThunk.initializeApp())
    }, [])

    if (!isInitialized) {
        return <Loading/>
    }
    return (
        <div className={st.page}>
            <GlobalError/>
            <AppBar/>
            {statusLoading === 'loading' && <LinearProgress
                color="secondary"/>}
            <div>
                <NavLink to={'/addNewCard'}>addNewCard</NavLink>
                <NavLink to={'/pageCards'}>PageCards</NavLink>
                <NavLink to={'/modal'}>BasicModal</NavLink>

                {/*    <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/register'}>register</NavLink>
                <NavLink to={'/checkEmail'}>checkEmail</NavLink>
                <NavLink to={'/setNewPassword'}>setNewPassword</NavLink>
                <NavLink to={'/profile'}>profile</NavLink>
                <NavLink to={'/packs'}>packs</NavLink>
                <NavLink to={'/cards'}>cards</NavLink>
                <NavLink to={'/learn'}>learn</NavLink>
                <NavLink to={'/editProfile'}>EditProfile</NavLink>*/}
            </div>


            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="register" element={<Registration/>}/>
                <Route path="checkEmail" element={<CheckEmail/>}/>
                <Route path="setNewPassword/:id" element={<CreateNewPassword/>}/>
                <Route path="forgotPassword" element={<ForgotPassword/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="editProfile" element={<EditProfile/>}/>
                <Route path="packs" element={<Packs/>}/>
                <Route path="learn" element={<Learn/>}/>
                <Route path="addNewCard" element={<AddNewCard/>}/>
                <Route path="pageCards/:id" element={<PageCards/>}/>
                {/*<Route path="modal" element={<BasicModal/>}/>*/}


                <Route path="/404" element={<h2>404: PAGE NOT FOUND</h2>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </div>
    )
}











