import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType} from "features/cards/cardApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialCardsState} from "features/cards/initialCardState";


type CompleteCardsStateType=GetResponseCardsType & {
    currentIdPack:string
}


const fetchCards = createAppAsyncThunk<{data:GetResponseCardsType,currentIdPack:string}, {cardsPack_id:string,page?:number}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let pageCount: number = 5
const respons = await cardApi.fetchCards(arg.cardsPack_id,pageCount,arg.page)
            return {data:respons.data,
            currentIdPack:arg.cardsPack_id}
        })
    })
/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */

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
    reducers:{},
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




