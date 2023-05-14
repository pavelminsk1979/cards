import {AppDispatch, RootState} from "../../store";
import {appActions} from "../../app/appSlise";
import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {AxiosError, isAxiosError} from "axios";


export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(appActions.setStatusLoading('loading'))
    try {
        return await logic(); /* это типо логика положительного кейса*/
    } catch (e) {
        const err = e as Error|AxiosError<{error:string}>
        if(isAxiosError(err)) {
            const error = err.response ? err.response.data.error : err.message;
            dispatch(appActions.setError( error ));
        }else{
            dispatch(appActions.setError(
                { error:`Native error ${err.message}` }));
        }
        return rejectWithValue(null);
    } finally {
        dispatch(appActions.setStatusLoading('finishLoading'))
    }
};