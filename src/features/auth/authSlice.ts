import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {}, /* пустой обьект, откорректирую позже */
    reducers: {},
});

export const authReducer = slice.reducer;
/*не забыть подключить authReducer к стору*/
