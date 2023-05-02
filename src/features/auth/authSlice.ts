import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "./authApi";
import {RegisterType} from "../../components/Registration";
import {LoginType} from "../../components/Login";


const register = createAsyncThunk('auth/register',(arg:RegisterType, thunkAPI) =>{
    authApi.register(arg)
        .then((response) => {})
} )

const login = createAsyncThunk('auth/login',(arg:LoginType, thunkAPI) =>{
    authApi.login(arg)
        .then((response) => {})
} )



const slice = createSlice({
    name: "auth",
    initialState: {}, /* пустой обьект, откорректирую позже */
    reducers: {},
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/

export const authThunk = {register,login}/* упаковываю в обьект */

