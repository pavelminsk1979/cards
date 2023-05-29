

import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType} from "features/cards/cardApi";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialCardsState, InitialCardsStateType} from "features/cards/initialCardState";

/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */
const fetchCards = createAppAsyncThunk<{data:GetResponseCardsType,currentIdPack:string }, {cardsPack_id:string}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const state = thunkAPI.getState()
            const page = state.cards.page
            const respons = await cardApi.fetchCards(
                arg.cardsPack_id,page)
            return {data:respons.data}
        })
    })

/*const fetchCards = createAppAsyncThunk<{data:GetResponseCardsType/!*currentIdPack:string,*!/
}, {cardsPack_id:string,page?:number,cardQuestion?:string}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 5
            const respons = await cardApi.fetchCards(arg.cardsPack_id,pageCount,
                arg.page,arg.cardQuestion)
            return {data:respons.data,
                /!*currentIdPack:arg.cardsPack_id*!/}
        })
    })*/
/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */

/*const createCard = createAppAsyncThunk<any,{cardsPack_id:string}>('cards/createCard',
    async(arg,thinkAPI)=>{
        return thunkTryCatch(thinkAPI,async ()=>{
            const card = {
                cardsPack_id:arg.cardsPack_id,
                question:'Сколько рыбы в море',
                answer:'мега-много',
                grade: 0,
                shots: 0,
                answerImg: '',
                questionImg: '',
                questionVideo: '',
                answerVideo: ''
            }
            const respons = await cardApi.createCard(card)
            thinkAPI.dispatch(cardThunk.fetchCards({cardsPack_id:arg.cardsPack_id}))
        })
    } )*/


const slice = createSlice({
    name:'cards',
    initialState:initialCardsState as InitialCardsStateType,
    reducers:{
        UpdatePageCardsInState(state,action:PayloadAction<{page:number}>){
            state.page=action.payload.page}
    },
    extraReducers:builder => {
        builder
            .addCase(fetchCards.fulfilled,(state, action)=>{
                state.cards=action.payload.data.cards
                state.currentIdPack=action.payload.data.cards[0].cardsPack_id
                state.page=action.payload.data.page
                state.pageCount=action.payload.data.pageCount
                state.cardsTotalCount=action.payload.data.cardsTotalCount
                state.packName=action.payload.data.packName
            })
    }
})

/*const slice = createSlice({
    name:'cards',
    initialState:initialCardsState as InitialCardsStateType,
    reducers:{}
    },
    extraReducers:builder => {
        builder
            .addCase(fetchCards.fulfilled,(state,action)=>{
              }
            })
    }
})*/

export const cardThunk = {fetchCards}

export const cardReducer = slice.reducer

export const cardActions = slice.actions





/*

const slice = createSlice({
        name:'cards',
        initialState:initialCardsState as InitialCardsStateType,
        reducers:{}
    },
    extraReducers:builder => {
    builder
        .addCase(fetchCards.fulfilled,(state,action)=>{
            return {...state,
                _id: action.payload.cards._id,
                /!*    cardsPack_id: action.payload.cards.cardsPack_id,
                    user_id: action.payload.cards.user_id,
                    answer: action.payload.cards.answer,
                    question: action.payload.cards.question,
                    grade: action.payload.cards.grade,
                    shots: action.payload.cards.shots,
                    created: action.payload.cards.created,
                    updated: action.payload.cards.updated,
                    packName:action.payload.packName,
                    page: action.payload.page,
                    pageCount: action.payload,pageCount,
                    cardsTotalCount: action.payload.cardsTotalCount,
                    cardQuestion: action.payload,cardQuestion,
                    sortCards: action.payload,sortCards,*!/
            }}
})
}
})
*/











/*import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType} from "features/cards/cardApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialCardsState} from "features/cards/initialCardState";


type CompleteCardsStateType=GetResponseCardsType & {
    currentIdPack:string
    // currentTextInputSearchCards:string
}


const fetchCards = createAppAsyncThunk<{data:GetResponseCardsType,currentIdPack:string,
}, {cardsPack_id:string,page?:number,cardQuestion?:string}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 5
const respons = await cardApi.fetchCards(arg.cardsPack_id,pageCount,
    arg.page,arg.cardQuestion)
            return {data:respons.data,
            currentIdPack:arg.cardsPack_id}
        })
    })
/!*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает *!/

const createCard = createAppAsyncThunk<any,{cardsPack_id:string}>('cards/createCard',
    async(arg,thinkAPI)=>{
    return thunkTryCatch(thinkAPI,async ()=>{
        const card = {
            cardsPack_id:arg.cardsPack_id,
            question:'Сколько рыбы в море',
            answer:'мега-много',
            grade: 0,
            shots: 0,
            answerImg: '',
            questionImg: '',
            questionVideo: '',
            answerVideo: ''
        }
        const respons = await cardApi.createCard(card)
        thinkAPI.dispatch(cardThunk.fetchCards({cardsPack_id:arg.cardsPack_id}))
    })
    } )



const slice = createSlice({
    name:'cards',
    initialState:initialCardsState as CompleteCardsStateType,
    reducers:{
        SetTextInputCardsInState(state,action){
            state.currentTextInputSearchCards=action.payload.cardQuestion
        }
    },
    extraReducers:builder => {
      builder
          .addCase(fetchCards.fulfilled,(state,action)=>{
              return {...action.payload.data,
                  currentIdPack:action.payload.currentIdPack}
          })
    }
})

export const cardThunk = {fetchCards,createCard}

export const cardReducer = slice.reducer

export const cardActions = slice.actions*/



