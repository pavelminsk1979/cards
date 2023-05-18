import {RootState} from "store";

export const selectPacksState = (state:RootState) => state.packs
export const selectArrayMinMaxValueSlice = (state:RootState) => [state.packs.minCardsCount, state.packs.maxCardsCount ]