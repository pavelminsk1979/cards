
import {createSlice} from "@reduxjs/toolkit";
import {
    authApi,
    CommonResponseType,
    EditProfileResponseType, EditProfileType,
    ForgotType,
    LoginResponseType,
    LoginType,
    RegisterType
} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {appThunk} from "../app/appSlise";



const register = createAppAsyncThunk<void,RegisterType>('auth/register', async (
    arg: RegisterType) => {
    const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{profileData:LoginResponseType},LoginType>('auth/login', async (arg: LoginType) => {
    const response = await authApi.login(arg)
    return {profileData: response.data}
})

const logOut = createAppAsyncThunk<{responsLogOut:CommonResponseType},{}>('auth/logOut',async (arg)=>{
    const response = await authApi.logOut(arg)
    return{responsLogOut:response.data}
    }

)

const editProfile = createAppAsyncThunk<{responseEditProfile:EditProfileResponseType},EditProfileType>('auth/editProfile',async (arg)=>{
    const response = await authApi.editProfile(arg)
    return {responseEditProfile:response.data}
})

const forgotPassword = createAppAsyncThunk('auth/forgotPassword',async (arg:ForgotType)=>{
    const response = await authApi.forgot(arg)
    return {responseForgotPassword:response.data.success}
})


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as null | LoginResponseType , /*когда происходид логинизация-тогда возвращаются с сервера обьект с данными
        ...из санки будут данные диспатчится в setProfile  и таким
        образом попадут в СТОР*/
        flagForgotPassword:false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(appThunk.initializeApp.fulfilled,(state,action)=>{
                state.profile=action.payload.valueInitializeApp
        })
            .addCase(forgotPassword.fulfilled,(state,action)=>{
                state.flagForgotPassword=action.payload.responseForgotPassword
            })
            .addCase(editProfile.fulfilled,(state,action)=>{
                state.profile=action.payload.responseEditProfile.updatedUser
            })
            .addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profileData
        })
            .addCase(logOut.fulfilled,(state, action)=>{
                if(action.payload.responsLogOut.info){
                    state.profile=null
                }
            })
    }
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/

export const authThunk = {register, login,logOut,forgotPassword,editProfile} /* CАНКИ упаковываю в обьект */

