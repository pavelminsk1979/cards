import {createAppAsyncThunk} from "common/utils/createAppAsyncThunk";
import {thunkTryCatch} from "common/utils/thunkTryCatch";
import {cardApi, GetResponseCardsType} from "features/cards/cardApi";
import {createSlice} from "@reduxjs/toolkit";
import {initialCardsState} from "features/cards/initialCardState";


const fetchCards = createAppAsyncThunk<{data:GetResponseCardsType}, {cardsPack_id:string}>('cards/fetchCards',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
const respons = await cardApi.fetchCards(arg.cardsPack_id)
            return {data:respons.data}
        })
    })
/*первым-что санка возвращает-положительный кейс
 вторым-что санка принимает */
const slice = createSlice({
    name:'cards',
    initialState:initialCardsState as GetResponseCardsType,
    reducers:{},
    extraReducers:builder => {
      builder
          .addCase(fetchCards.fulfilled,(state,action)=>{
              return {...action.payload.data}
          })
    }
})

export const cardThunk = {fetchCards}

export const cardReducer = slice.reducer