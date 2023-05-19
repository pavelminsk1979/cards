import {RootState} from "store";

export const selectCardPacks = (state:RootState) => state.packs.cardPacks

export const selectArrayMinMaxValueSlice = (state:RootState) => [state.packs.minCardsCount, state.packs.maxCardsCount ]

export const selectPacksState = (state:RootState) => state.packs

export const selectPageCount = (
    state:RootState) => state.packs.pageCount

export const selectPage = (state:RootState) => state.packs.page