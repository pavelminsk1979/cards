import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";

import {appApi} from "./appApi";
import {LoginResponseType} from "../auth/authApi";
import {authThunk} from "../auth/authSlice";

const initializeApp = createAppAsyncThunk<{valueInitializeApp:LoginResponseType}, {}>('app/initializeApp', async (arg,thunkAPI) => {
    try{
        const response = await appApi.initializeApp(arg)
        return {valueInitializeApp: response.data}
    }  catch (e:any){
        const error = e.response.data.error
        return thunkAPI.rejectWithValue(error)
    }

})


const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false,
        error:null as string|null,
        isLoading:false
    },
    reducers: {
        setError:(state,action)=>{
            state.error= action.payload
            /* Вывести ошибку на экран-- текст в action.payload*/
        }
    },
    extraReducers: builder => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) => {
                    state.isInitialized = true
            })
            .addCase(initializeApp.rejected,(state,action)=>{
                    state.isInitialized = true
               })
    }
})

export const appReducer = slice.reducer;
/*не забыть подключить appReducer к стору*/

export const appActions = slice.actions

export const appThunk = {initializeApp}