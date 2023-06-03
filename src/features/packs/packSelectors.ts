import {RootState} from "store/store";

export const selectCardPacks = (state:RootState) => state.packs.cardPacks

export const selectArrayMinMaxValueSlice = (state:RootState) => [state.packs.minCardsCount, state.packs.maxCardsCount ]

export const selectArrayMinMaxCorrectValueSlice = (state:RootState) => [
    state.packs.minValueSlider, state.packs.maxValueSlider ]

/*export const selectPacksState = (state:RootState) => state.packs*/

export const selectPacksTotalCount = (state:RootState) => state.packs.cardPacksTotalCount

export const selectPageCount = (
    state:RootState) => state.packs.pageCount

export const selectPage = (state:RootState) => state.packs.page

export const selectPackNameInput = (state:RootState) => state.packs.packNameInput

export const selectSortPacks = (state:RootState) => state.packs.sortPacks

export const selectMyId = (state:RootState) => state.packs.myId

export const selectDataTableHeadersPacks = (state:RootState) => state.packs.dataTableHeadersPacks

export const selectFlagResetSlider = (state:RootState) => state.packs.flagResetSlider

export const selectMyIdForCheck = (state:RootState) => state.auth.profile?._id







