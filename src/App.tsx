import React, {useEffect} from "react";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Login} from "./features/auth/Login/Login";
import {Registration} from "./features/auth/registration/Registration";
import {CheckEmail} from "./features/auth/checkEmail/CheckEmail";
import {CreateNewPassword} from "./features/auth/createNewPassword/CreateNewPassword";
import {ForgotPassword} from "./features/auth/forgotPassword/ForgotPassword";
import {Profile} from "./features/auth/profile/Profile";
import {Packs} from "./components/Packs";
import {Cards} from "./components/Cards";
import {Learn} from "./components/Learn";
import st from './App.module.css'
import {AppBar} from "./components/appBar/AppBar";
import {EditProfile} from "./features/auth/editProfile/EditProfile";
import {useAppDispatch} from "./app/hooks";
import {appThunk} from "./features/app/appSlise";
import {RootState} from "./store";
import {useSelector} from "react-redux";


export const App = () => {
    const dispatch = useAppDispatch();
    const isInitialized = useSelector <RootState, boolean>(
        state => state.app.isInitialized)

    useEffect(()=>{
        const payload={}
        dispatch(appThunk.initializeApp(payload))
    },[ ])

   /* if (isInitialized) {
        return <Navigate to={'/packs'}/>
    }*/
  /*  if (!isInitialized) {
        return <Navigate to={'/'}/>
    }*/
    return (
        <div className={st.page}>
            <AppBar/>
            <div>
                {/*<NavLink to={'/'}>login</NavLink>
                    <NavLink to={'/register'}>register</NavLink>*/}
                <NavLink to={'/checkEmail'}>checkEmail</NavLink>
                <NavLink to={'/setNewPassword'}>setNewPassword</NavLink>
                {/*<NavLink to={'/forgotPassword'}>forgotPassword</NavLink>*/}
                <NavLink to={'/profile'}>profile</NavLink>
                <NavLink to={'/packs'}>packs</NavLink>
                <NavLink to={'/cards'}>cards</NavLink>
                <NavLink to={'/learn'}>learn</NavLink>
                <NavLink to={'/editProfile'}>EditProfile</NavLink>
            </div>


            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="register" element={<Registration/>}/>
                <Route path="checkEmail" element={<CheckEmail/>}/>
                <Route path="setNewPassword" element={<CreateNewPassword/>}/>
                <Route path="forgotPassword" element={<ForgotPassword/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="editProfile" element={<EditProfile/>}/>
                <Route path="packs" element={<Packs/>}/>
                <Route path="cards" element={<Cards/>}/>
                <Route path="learn" element={<Learn/>}/>


                <Route path="/404" element={<h2>404: PAGE NOT FOUND</h2>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    )
}


/*
return <Grid container justifyContent={'center'}>
    <Grid item justifyContent={'center'}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <FormGroup>
                    <TextField
                        {...formik.getFieldProps('email')}
                        margin="normal"/>
                    {formik.touched.email &&formik.errors.email&&<div style={{color:'red'}}>{
                        formik.errors.email}</div>}
                    <TextField
                        {...formik.getFieldProps('password')}
                        type="password"
                        margin="normal"/>
                    {formik.touched.password &&formik.errors.password&&<div style={
                        {color:'red'}}>{formik.errors.password}</div>}
                    <FormControlLabel label={'Remember me'} control={
                        <Checkbox
                            {...formik.getFieldProps('rememberMe')}
                        />
                    }/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
        </form>
    </Grid>
</Grid>*/









