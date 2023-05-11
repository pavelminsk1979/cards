import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";

import {appApi} from "./appApi";

const initializeApp = createAppAsyncThunk<any, any>('app/initializeApp', async (arg,thunkAPI) => {
    try{
        const response = await appApi.initializeApp(arg)
        return {valueInitializeApp: response.data}
    }  catch (e:any){
        return thunkAPI.rejectWithValue(e)
    }

})


const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(initializeApp.rejected,(state, action)=>{
                state.isInitialized = true
            })
            .addCase(initializeApp.fulfilled, (state, action) => {
                    state.isInitialized = true
            })
            .addCase(initializeApp.rejected,(state,action)=>{
                /*state.isInitialized = false*/
            })
    }
})

export const appReducer = slice.reducer;
/*не забыть подключить appReducer к стору*/

export const appThunk = {initializeApp}