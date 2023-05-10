import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import {authReducer} from "../features/auth/authSlice";
import {appReducer} from "../features/app/appSlise";

export const store = configureStore({
  reducer: {
    app:appReducer,
    auth:authReducer,
    counter: counterReducer,
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
