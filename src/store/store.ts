

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {authReducer} from "features/auth/authSlice";
import {appReducer} from "features/app/appSlice";
import {packReducer} from "features/packs/packSlice";
import {cardReducer} from "features/cards/cardSlice";

export const store = configureStore({
  reducer: {
    app:appReducer,
    auth:authReducer,
    packs:packReducer,
    cards:cardReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/* @ts-ignore */   /* store.getState()  */
window.store = store




