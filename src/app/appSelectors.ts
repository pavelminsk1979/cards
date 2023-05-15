import {RootState} from "store";

export const selectStatusLoading = (state:RootState) =>state.app.statusLoading

export const selectIsInitialized = (state:RootState) =>state.app.isInitialized

