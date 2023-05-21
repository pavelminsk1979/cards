import {RootState} from "store/store";

export const selectStatusLoading = (state:RootState) =>state.app.statusLoading

export const selectIsInitialized = (state:RootState) =>state.app.isInitialized

