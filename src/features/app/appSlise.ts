import {createAppAsyncThunk} from "../../common/utils/createAppAsyncThunk";
import {createSlice} from "@reduxjs/toolkit";

import {appApi} from "./appApi";

const initializeApp = createAppAsyncThunk<any, any>('app/initializeApp', async (arg: {}) => {
    const response = await appApi.initializeApp(arg)
    return {valueInitializeApp: response.data}
})


const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) => {
                if (action.payload.valueInitializeApp.error === undefined) {
                    state.isInitialized = true
                } else {
                    state.isInitialized = false
                }
            })
    }
})

export const appReducer = slice.reducer;
/*не забыть подключить appReducer к стору*/

export const appThunk = {initializeApp}