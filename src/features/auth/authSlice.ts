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
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {appThunk} from "features/app/appSlice";
import {thunkTryCatch} from "common/utils/thunkTryCatch";


const register = createAppAsyncThunk<void, RegisterType>('auth/register', async (arg: RegisterType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        await authApi.register(arg)
    })
})


const login = createAppAsyncThunk<{ profileData: LoginResponseType }, LoginType>('auth/login', async (arg: LoginType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const response = await authApi.login(arg)
        return {profileData: response.data}
    })
})

const logOut = createAppAsyncThunk<{ responsLogOut: CommonResponseType }>('auth/logOut', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const response = await authApi.logOut()
            return {responsLogOut: response.data}
        })
    }
)

const setNewPassword = createAppAsyncThunk<{ responseSetNewPassword: CommonResponseType }, { password: string, }>('auth/setNewPassword',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const response = await authApi.setNewPassword(arg)
            return {responseSetNewPassword: response.data}
        })
    })
/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */

const editProfile = createAppAsyncThunk<{ responseEditProfile: EditProfileResponseType }, EditProfileType>('auth/editProfile', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const response = await authApi.editProfile(arg)
        return {responseEditProfile: response.data}
    })
})

const forgotPassword = createAppAsyncThunk('auth/forgotPassword', async (arg: ForgotType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const response = await authApi.forgot(arg)
        return {responseForgotPassword: response.data.success}
    })
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
                state.flagSetNewPassword = false
            })
            .addCase(logOut.fulfilled, (state, action) => {

                if (action.payload.responsLogOut.info) {
                    state.isLoggedIn = false
                    state.profile = null
                }
            })
    }
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/

export const authThunk = {register, login, logOut, forgotPassword, editProfile, setNewPassword} /* CАНКИ упаковываю в обьект */

/*alert(JSON.stringify(values));*/