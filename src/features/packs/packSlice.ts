import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {GetResponsePacksType, packApi} from "features/packs/packApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialPacksState} from "features/packs/initialPacksState";


type CompletePacksStateType = GetResponsePacksType & {
    packNameInput: string
    minValueSlider: number
    maxValueSlider: number
    sortPacks: string
}

const deletePack = createAppAsyncThunk<void, { id: string }>('packs/deletePack', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packApi.deletePack(arg.id)
        const statePacks = thunkAPI.getState().packs

        thunkAPI.dispatch(packThunk.fetchPacks({
            page: statePacks.page,
            packNameInput: statePacks.packNameInput,
            min: statePacks.minValueSlider,
            max: statePacks.minValueSlider,
            sortPacks: statePacks.sortPacks
        }))
    })
})

const createPack = createAppAsyncThunk<void, { name: string }>('packs/createPack',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const cardsPack = {name: arg.name}
            const respons = await packApi.createPack({cardsPack})
            const statePacks = thunkAPI.getState().packs

            thunkAPI.dispatch(packThunk.fetchPacks({
                page: statePacks.page,
                packNameInput: statePacks.packNameInput,
                min: statePacks.minValueSlider,
                max: statePacks.minValueSlider,
                sortPacks: statePacks.sortPacks
            }))
        })
    })

const fetchPacks = createAppAsyncThunk<{
    data: GetResponsePacksType,
    packName: string,      /* что санка возвращает-положительный кейс */
    min: number,
    max: number
    sortPacks: string
},
    {
        page?: number,
        packNameInput?: string,
        min?: number,       /* что санка принимает */
        max?: number
        sortPacks?: string
    }>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 7  /*столько колод ожидаю с сервера при get запросе */

            /*  const state = thunkAPI.getState() /!*достать можно текущие данные *!/  */

            const respons = await packApi.fetchPacks(
                pageCount,
                arg.page,
                arg.packNameInput,
                arg.min,
                arg.max,
                arg.sortPacks
            )

            return {
                data: respons.data,
                packName: arg.packNameInput,
                min: arg.min,
                max: arg.max,
                sortPacks: arg.sortPacks
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
                    maxValueSlider: action.payload.max,
                    sortPacks: action.payload.sortPacks
                }
            })
    }
})

export const packThunk = {fetchPacks, createPack,deletePack}

export const packReducer = slice.reducer