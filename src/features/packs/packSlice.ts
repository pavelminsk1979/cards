import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {CardsPackType, GetResponsePacksType, packApi} from "features/packs/packApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialPacksState, initialPacksStateType} from "features/packs/initialPacksState";



type CompletePacksStateType = initialPacksStateType & {
    packNameInput: string
    minValueSlider: number
    maxValueSlider: number
    sortPacks: string
    myId:string
    flagResetSlider:boolean
}

const updatePack = createAppAsyncThunk<void, {cardsPack:CardsPackType}>('packs/updatePack', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packApi.updatePack(arg.cardsPack)
        const statePacks = thunkAPI.getState().packs

        thunkAPI.dispatch(packThunk.fetchPacks({
            page: statePacks.page,
            packNameInput: statePacks.packNameInput,
            min: statePacks.minValueSlider,
            max: statePacks.minValueSlider,
            sortPacks: statePacks.sortPacks,
            user_id:statePacks.myId
        }))
    })
})


const deletePack = createAppAsyncThunk<void, { id: string }>('packs/deletePack', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const res = await packApi.deletePack(arg.id)
        const statePacks = thunkAPI.getState().packs

        thunkAPI.dispatch(packThunk.fetchPacks({
            page: statePacks.page,
            packNameInput: statePacks.packNameInput,
            min: statePacks.minValueSlider,
            max: statePacks.minValueSlider,
            sortPacks: statePacks.sortPacks,
            user_id:statePacks.myId
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
                sortPacks: statePacks.sortPacks,
                user_id:statePacks.myId
            }))
        })
    })

const fetchPacks = createAppAsyncThunk<{
    data: GetResponsePacksType,
    packName: string,      /* что санка возвращает-положительный кейс */
    min: number,
    max: number
    sortPacks: string
    myId:string
},
    {
        page?: number,
        packNameInput?: string,
        min?: number,       /* что санка принимает */
        max?: number
        sortPacks?: string
        user_id?:string
    }>('packs/fetchPacks', async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 5  /*столько колод ожидаю с сервера при get запросе */

            /*  const state = thunkAPI.getState() /!*достать можно текущие данные *!/  */

            const respons = await packApi.fetchPacks(
                pageCount,
                arg.page,
                arg.packNameInput,
                arg.min,
                arg.max,
                arg.sortPacks,
                arg.user_id
            )
            return {
                data: respons.data,
                packName: arg.packNameInput,
                min: arg.min,
                max: arg.max,
                sortPacks: arg.sortPacks,
                myId:arg.user_id
            }
        })
    }
)


const slice = createSlice({
    name: 'packs',
    initialState: initialPacksState as CompletePacksStateType,
    reducers: {
        setNewDataTableHeadersPacks(state,action: PayloadAction<{id:number,valueArrowDirection:boolean}>){
            const index = state.dataTableHeadersPacks.findIndex(el => el.id === action.payload.id)
            state.dataTableHeadersPacks[index].arrowDirection = !action.payload.valueArrowDirection
        },
        resetDataTableHeadersPacks(state){
            return state.dataTableHeadersPacks.forEach(el=> el.arrowDirection=true)
        },
        resetValueSlider(state,action){
            state.minValueSlider = action.payload.arrayMinMaxValueSlice[0]
            state.maxValueSlider = action.payload.arrayMinMaxValueSlice[1]
        },
        changeFlagResetSlider(state,action){
            state.flagResetSlider = !action.payload.flagResetSlider
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPacks.fulfilled, (state, action) => {
                return { ...state,
                    ...action.payload.data,
                    packNameInput: action.payload.packName,
                    minValueSlider: action.payload.min ?? action.payload.data.minCardsCount,
                    maxValueSlider: action.payload.max ?? action.payload.data.maxCardsCount,
                    sortPacks: action.payload.sortPacks,
                    myId:action.payload.myId ,flagResetSlider:false}
            })
    }
})  /*если в значении null или underfined тогда присвоится то что прописано после оператора (??)*/

export const packThunk = {fetchPacks, createPack,deletePack,updatePack}

export const packReducer = slice.reducer

export const packActions = slice.actions


