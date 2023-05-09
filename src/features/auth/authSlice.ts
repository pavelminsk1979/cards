import {createSlice} from "@reduxjs/toolkit";
import {authApi, LoginResponseType, LoginType, LogOutType, RegisterType} from "./authApi";
import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";



const register = createAppAsyncThunk<void,RegisterType>('auth/register', async (
    arg: RegisterType) => {
    const res = await authApi.register(arg)
})

const login = createAppAsyncThunk<{profileData:LoginResponseType},LoginType>('auth/login', async (arg: LoginType) => {
    const response = await authApi.login(arg)
    return {profileData: response.data}
})

const logOut = createAppAsyncThunk<{responsLogOut:LogOutType},{}>('auth/logOut',async (arg:{})=>{
    const response = await authApi.logOut(arg)
    return{responsLogOut:response.data}
    }

)


const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as null | LoginResponseType  /*когда происходид логинизация-тогда возвращаются с сервера обьект с данными
        ...из санки будут данные диспатчится в setProfile  и таким
        образом попадут в СТОР*/
    },
    reducers: {},
    extraReducers: builder => {
        builder
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

export const authThunk = {register, login,logOut} /* CАНКИ упаковываю в обьект */

