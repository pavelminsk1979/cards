import {createSlice} from "@reduxjs/toolkit";
import {authApi, LoginResponseType} from "./authApi";
import {RegisterType} from "../../components/Registration";
import {LoginType} from "../../components/Login";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";



const register = createAppAsyncThunk<void,RegisterType>('auth/register', async (
    arg: RegisterType) => {
    const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{profileData:LoginResponseType},LoginType>('auth/login', async (arg: LoginType) => {
    const response = await authApi.login(arg)
    return {profileData: response.data}
})


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as null | LoginResponseType  /*когда происходид логинизация-тогда возвращаются с сервера обьект с данными
        ...из санки будут данные диспатчится в setProfile  и таким
        образом попадут в СТОР*/
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profileData
        })
    }
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/

export const authThunk = {register, login} /* CАНКИ упаковываю в обьект */

