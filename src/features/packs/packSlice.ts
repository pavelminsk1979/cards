
import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {GetResponsePacksType, packApi} from "features/packs/packApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialPacksState} from "features/packs/initialPacksState";

type CompletePacksStateType = GetResponsePacksType & {
    packNameFromInput:''
}


const fetchPacks = createAppAsyncThunk<CompletePacksStateType,{page?:number,packName?:string}>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 9  /*столько колод ожидаю с сервера при get запросе */

           /* const state = thunkAPI.getState() /!*достать можно текущие данные *!/  */

            const respons = await packApi.fetchPacks(
                pageCount,arg.page,arg.packName)
            return respons.data/*,packNameFromInput:arg.packName}*/
        })
    }
)

/*const fetchPacks = createAppAsyncThunk<GetResponsePacksType,{page?:number,packName?:string}>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 9  /!*столько колод ожидаю с сервера при get запросе *!/

            /!* const state = thunkAPI.getState() /!*достать можно текущие данные *!/  *!/

            const respons = await packApi.fetchPacks(
                pageCount,arg.page,arg.packName)
            debugger
            return respons.data
        })
    }
)*/



const slice = createSlice({
    name:'packs',
    initialState:initialPacksState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchPacks.fulfilled,(state,action)=>{
                return  {...action.payload, packNameFromInput:''}
            })
    }
})

export const packThunk = {fetchPacks}

export const packReducer = slice.reducer