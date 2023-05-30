import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType, PayloadPostRequestType, PayloadPutType} from "features/cards/cardApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialCardsState, InitialCardsStateType} from "features/cards/initialCardState";

/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */
const fetchCards = createAppAsyncThunk<{ data: GetResponseCardsType, currentIdPack: string }, { cardsPack_id: string }>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {

            const state = thunkAPI.getState()
            const page = state.cards.page
            const cardQuestion = state.cards.cardQuestion
            const sortCards = state.cards.valueSortCards

            const respons = await cardApi.fetchCards(
                arg.cardsPack_id, page, cardQuestion,sortCards)
            return {data: respons.data, currentIdPack: arg.cardsPack_id}
        })
    })

const createCard = createAppAsyncThunk<void, { card: PayloadPostRequestType }>('cards/createCard', async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
        const respons = await cardApi.createCard(arg.card)
        thunkAPI.dispatch(fetchCards(
            {cardsPack_id: arg.card.card.cardsPack_id}))
    })
})

const deleteCard = createAppAsyncThunk<void, {id:string}>('cards/deleteCard',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const respons = await cardApi.deleteCard(arg.id)
            const state = thunkAPI.getState()
            const cardsPack_id = state.cards.currentIdPack
            thunkAPI.dispatch(fetchCards({cardsPack_id}))
        })
    })

const updateCard = createAppAsyncThunk<void, {payload:PayloadPutType}>('cards/updateCard',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const respons = await cardApi.updateCard(arg.payload)
            const state = thunkAPI.getState()
            const cardsPack_id = state.cards.currentIdPack
            thunkAPI.dispatch(fetchCards({cardsPack_id}))
        })
    })


const slice = createSlice({
    name: 'cards',
    initialState: initialCardsState as InitialCardsStateType,
    reducers: {
        UpdatePageCardsInState(state, action: PayloadAction<{ page: number }>) {
            state.page = action.payload.page
        },

        SetTextInputCardsInState(state, action: PayloadAction<{ cardQuestion: string }>) {
            state.cardQuestion = action.payload.cardQuestion
        },
        SetValueSortCards(state,action:PayloadAction<{sortCards:string}>){
            state.valueSortCards = action.payload.sortCards
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.cards = action.payload.data.cards
                state.page = action.payload.data.page
                state.pageCount = action.payload.data.pageCount
                state.cardsTotalCount = action.payload.data.cardsTotalCount
                state.packName = action.payload.data.packName
                state.currentIdPack = action.payload.currentIdPack
            })
    }
})

export const cardThunk = {fetchCards, createCard, deleteCard,updateCard}

export const cardReducer = slice.reducer

export const cardActions = slice.actions




