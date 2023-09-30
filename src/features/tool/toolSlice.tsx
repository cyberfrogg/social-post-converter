import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice, Draft} from "@reduxjs/toolkit";

export interface ToolState {
    title: string,
    textContent: string,
    nickname: string,
    avatarBase64: string,
    resultImageBase64: string
    isResultShown: boolean,
}

const initialState: ToolState = {
    title: "",
    textContent: "",
    nickname: "",
    avatarBase64: "data:image/avif;base64,AAAAFGZ0eXBhdmQAAAAAAAQAAAB5pbG9jAAA",
    resultImageBase64: "data:image/avif;base64,AAAAFGZ0eXBhdmQAAAAAAAQAAAB5pbG9jAAA",
    isResultShown: false,
};

export const toolSlice = createSlice({
    name: "tool",
    initialState,
    reducers: {
        setTitle: (state: Draft<ToolState>, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setTextContent: (state: Draft<ToolState>, action: PayloadAction<string>) => {
            state.textContent = action.payload;
        },
        setNickname: (state: Draft<ToolState>, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
        setAvatarBase64: (state: Draft<ToolState>, action: PayloadAction<string>) => {
            state.avatarBase64 = action.payload;
        },
        showResult: (state: Draft<ToolState>, action: PayloadAction<string>) => {
            state.isResultShown = true;
            state.resultImageBase64 = action.payload;
        },
        hideResult: (state: Draft<ToolState>) => {
            state.isResultShown = false;
        },
    },
});

export const { setTitle, setTextContent, setNickname, setAvatarBase64, showResult, hideResult } = toolSlice.actions;

export default toolSlice.reducer;