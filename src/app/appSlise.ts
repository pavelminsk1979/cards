import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";
import {appApi} from "./appApi";
import {LoginResponseType} from "features/auth/authApi";
import {thunkTryCatch} from "common/utils/thunkTryCatch";



const initializeApp = createAppAsyncThunk<{ valueInitializeApp: LoginResponseType }>('app/initializeApp', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const response = await appApi.initializeApp()
        return {valueInitializeApp: response.data}
    })
})


const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false,
        error: null as string | null,
        statusLoading: 'finishLoading'  as 'loading' | 'finishLoading'
    },
    reducers: {

        setError: (state, action) => {
            state.error = action.payload
            /* Вывести ошибку на экран-- текст в action.payload*/
        },
        setStatusLoading : (state,action)=>{
            state.statusLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) => {
                state.isInitialized = true
            })
            .addCase(initializeApp.rejected, (state, action) => {
                state.isInitialized = true
            })
    }
})

export const appReducer = slice.reducer;
/*не забыть подключить appReducer к стору*/

export const appActions = slice.actions

export const appThunk = {initializeApp}