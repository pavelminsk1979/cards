
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {packApi} from "features/packs/packApi";
import {createSlice} from "@reduxjs/toolkit";


const fetchPack = createAppAsyncThunk<any>('packs/fetchPack', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const response = await packApi.fetchPacks()
            return {responsLogOut: response.data}
        })
    }
)


const slice = createSlice({
    name:'packs',
    initialState:{},
    reducers:{},
    extraReducers:{}
})

export const packThunk = {fetchPack}

export const packReducer = slice.reducer