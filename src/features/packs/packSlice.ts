
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {GetResponsePacksType, packApi} from "features/packs/packApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialPacksState} from "features/packs/initialPacksState";




const fetchPacks = createAppAsyncThunk<GetResponsePacksType,{pageCount:number,page:number}>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const respons = await packApi.fetchPacks(arg.pageCount,arg.page)
            return respons.data
        })
    }
)


const slice = createSlice({
    name:'packs',
    initialState:initialPacksState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchPacks.fulfilled,(state,action)=>{
                return  action.payload
            })
    }
})

export const packThunk = {fetchPacks}

export const packReducer = slice.reducer