import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType, PayloadPostRequestType, PayloadPutType} from "features/cards/cardApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialCardsState, InitialCardsStateType} from "features/cards/initialCardState";

/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */
const fetchCards = createAppAsyncThunk<{ data: GetResponseCardsType, currentIdPack: string }, { cardsPack_id: string,pageCount?:number}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {

            const state = thunkAPI.getState()
            const page = state.cards.page
            const cardQuestion = state.cards.cardQuestion
            const sortCards = state.cards.valueSortCards
            const pageCount=arg.pageCount

            const respons = await cardApi.fetchCards(
                arg.cardsPack_id, page, cardQuestion,sortCards,pageCount)
            return {data: respons.data, currentIdPack: arg.cardsPack_id}
        })
    })

const updateGradeCard = createAppAsyncThunk<{grade:number,card_id:string},{grade:number,card_id:string}>('cards/updateGradeCard',
    async (arg,thunkAPI)=>{
    return thunkTryCatch(thunkAPI,async ()=>{
        const respons = await cardApi.updateGradeCard(arg)
        return {grade:arg.grade,card_id:arg.card_id}
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
         /*   const state = thunkAPI.getState()
            const cardsPack_id = state.cards.currentIdPack
            thunkAPI.dispatch(fetchCards({cardsPack_id}))*/
        })
    })


const slice = createSlice({
    name: 'cards',
    initialState: initialCardsState as InitialCardsStateType,
    reducers: {
        SetShotsCurrentCard(state,action:PayloadAction<{shots:number}>){
state.shotsCurrentCard=action.payload.shots
        },
        RemoveShowedCard(state,action:PayloadAction<{
            idCard: string }>){
            const index = state.cards.findIndex(el => el._id === action.payload.idCard)
            if (index > -1) {
                state.cards.splice(index, 1)
            }
        },
        SetRandomeNumberForLearnCard(state,action:PayloadAction<{
            randomNumber: number }>){
            state.randomNumberForLearnCard=action.payload.randomNumber
        },

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
            .addCase(updateGradeCard.fulfilled,(state,action)=>{
              state.cards.map(el=>el._id===action.payload.card_id
                  ?el.grade=action.payload.grade
                  :el)
            })
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

export const cardThunk = {fetchCards, createCard, deleteCard,updateCard,updateGradeCard}

export const cardReducer = slice.reducer

export const cardActions = slice.actions




