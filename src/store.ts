

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {authReducer} from "features/auth/authSlice";
import {appReducer} from "app/appSlise";
import {packReducer} from "features/packs/packSlice";

export const store = configureStore({
  reducer: {
    app:appReducer,
    auth:authReducer,
    packs:packReducer,
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




