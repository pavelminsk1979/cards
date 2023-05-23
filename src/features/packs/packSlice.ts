import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {GetResponsePacksType, packApi} from "features/packs/packApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialPacksState} from "features/packs/initialPacksState";

/*type CompletePacksStateType = {
    packName:'',
    data: GetResponsePacksType
}*/


type CompletePacksStateType = GetResponsePacksType & {
    packNameInput: string
    minValueSlider: number
    maxValueSlider: number
}


const fetchPacks = createAppAsyncThunk<{
    data: GetResponsePacksType,
    packName: string,
    min: number,
    max: number
},
    { page?: number,
        packNameInput?: string,
        min?: number,
        max?: number
    }>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 9  /*столько колод ожидаю с сервера при get запросе */

            /*  const state = thunkAPI.getState() /!*достать можно текущие данные *!/  */


            const respons = await packApi.fetchPacks(
                pageCount,
                arg.page,
                arg.packNameInput,
                arg.min,
                arg.max)

            return {
                data: respons.data,
                packName: arg.packNameInput,
                min: arg.min,
                max: arg.max
            }
        })
    }
)


const slice = createSlice({
    name: 'packs',
    initialState: initialPacksState as CompletePacksStateType,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPacks.fulfilled, (state, action) => {
                return {
                    ...action.payload.data,
                    packNameInput: action.payload.packName, minValueSlider: action.payload.min,
                    maxValueSlider: action.payload.max
                }
            })
    }
})

export const packThunk = {fetchPacks}

export const packReducer = slice.reducer