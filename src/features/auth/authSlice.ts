import {createSlice} from "@reduxjs/toolkit";
import {
    authApi,
    CommonResponseType,
    EditProfileResponseType, EditProfileType,
    ForgotType,
    LoginResponseType,
    LoginType, RegisterResponseType,
    RegisterType
} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {appActions, appReducer, appThunk} from "../app/appSlise";


const register = createAppAsyncThunk<{response:RegisterResponseType}, RegisterType>('auth/register', async (arg: RegisterType,thunkAPI) => {
    try {debugger
        const res = await authApi.register(arg)
        return {response:res.data}
    } catch (e:any) {
        debugger
            thunkAPI.dispatch(appActions.setError(
                e.response?e.response.data.error:e.message))
            return thunkAPI.rejectWithValue(null)
    }
})

const login = createAppAsyncThunk<{ profileData: LoginResponseType }, LoginType>('auth/login', async (arg: LoginType) => {
    const response = await authApi.login(arg)
    return {profileData: response.data}
})

const logOut = createAppAsyncThunk<{ responsLogOut: CommonResponseType }, {}>('auth/logOut', async (arg) => {
        const response = await authApi.logOut(arg)
        return {responsLogOut: response.data}
    }
)

const setNewPassword = createAppAsyncThunk<{responseSetNewPassword:CommonResponseType}, {password: string,}>('auth/setNewPassword',
    async (arg) => {
        const response = await authApi.setNewPassword(arg)
        return {responseSetNewPassword: response.data}
    })

const editProfile = createAppAsyncThunk<{ responseEditProfile: EditProfileResponseType }, EditProfileType>('auth/editProfile', async (arg) => {
    const response = await authApi.editProfile(arg)
    return {responseEditProfile: response.data}
})

const forgotPassword = createAppAsyncThunk('auth/forgotPassword', async (arg: ForgotType) => {
    const response = await authApi.forgot(arg)
    return {responseForgotPassword: response.data.success}
})


const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        profile: null as null | LoginResponseType, /*когда происходид логинизация-тогда возвращаются с сервера обьект с данными
        ...из санки будут данные диспатчится в setProfile  и таким
        образом попадут в СТОР*/
        flagForgotPassword: false,
        flagSetNewPassword: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setNewPassword.fulfilled, (state, action) => {
                state.flagSetNewPassword = true
            })
            .addCase(appThunk.initializeApp.fulfilled, (state, action) => {
                state.profile = action.payload.valueInitializeApp
                state.isLoggedIn = true
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.flagForgotPassword = action.payload.responseForgotPassword
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.profile = action.payload.responseEditProfile.updatedUser
            })
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profileData
                state.isLoggedIn = true
                state.flagSetNewPassword=false
            })
            .addCase(logOut.fulfilled, (state, action) => {
                if (action.payload.responsLogOut.info) {
                    state.profile = null
                    state.isLoggedIn = false
                }
            })
    }
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/

export const authThunk = {register, login, logOut, forgotPassword, editProfile, setNewPassword} /* CАНКИ упаковываю в обьект */

