import React from "react";
import "./App.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Registration";
import {CheckEmail} from "./components/CheckEmail";
import {SetNewPassword} from "./components/SetNewPassword";
import {ForgotPassword} from "./components/ForgotPassword";
import {Profile} from "./components/Profile";
import {Packs} from "./components/Packs";
import {Cards} from "./components/Cards";
import {Learn} from "./components/Learn";



export const App = () => {
    return (
        <div>

            <NavLink to={'/'}>login</NavLink>
            <NavLink to={'/register'}>register</NavLink>
            <NavLink to={'/checkEmail'}>checkEmail</NavLink>
            <NavLink to={'/setNewPassword'}>setNewPassword</NavLink>
            <NavLink to={'/forgotPassword'}>forgotPassword</NavLink>
            <NavLink to={'/profile'}>profile</NavLink>
            <NavLink to={'/packs'}>packs</NavLink>
            <NavLink to={'/cards'}>cards</NavLink>
            <NavLink to={'/learn'}>learn</NavLink>


    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Registration/>}/>
        <Route path="checkEmail" element={<CheckEmail/>}/>
        <Route path="setNewPassword" element={<SetNewPassword/>}/>
        <Route path="forgotPassword" element={<ForgotPassword/>}/>
        <Route path="profile" element={<Profile/>}/>
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









