import {RootState} from "store/store";


export const selectCards = (state:RootState) => state.cards.cards

export const selectPackName = (state:RootState) => state.cards.packName

export const selectNumberPageWithServer = (state:RootState) => state.cards.page

export const selectCountItemsForOnePage = (state:RootState) => state.cards.pageCount

export const selectCountWithServerItems = (state:RootState) => state.cards.cardsTotalCount

