import React from "react";
import classes from "./actualPost.module.css";
import TextareaAutosize from "react-textarea-autosize";
import {useDispatch, useSelector} from "react-redux";
import {setAvatarBase64, setNickname, setTextContent, setTitle} from "../../../features/tool/toolSlice";
import {RootState} from "../../../store";
import {Spacer} from "../../controls/spacer/spacer";

const ActualPost = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.tool.title);
    const textContent = useSelector((state: RootState) => state.tool.textContent);
    const nickname = useSelector((state: RootState) => state.tool.nickname);

    const onTitleChanged = (text: string) => {
        dispatch(setTitle(text));
    };

    const onTextContentChanged = (text: string) => {
        dispatch(setTextContent(text));
    };

    const onAvatarChanged = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            dispatch(setAvatarBase64(reader.result as string));
        };
    };

    const onNicknameChanged = (text: string) => {
        dispatch(setNickname(text));
    };

    return (
        <div className={classes.container}>

            <TextareaAutosize
                className={classes.textarea}
                onChange={(e) => { onTitleChanged(e.target.value); }}
                value={title}
                placeholder={"Enter title here..."}
            />

            <TextareaAutosize
                className={classes.textarea}
                onChange={(e) => { onTextContentChanged(e.target.value); }}
                value={textContent}
                placeholder={"Enter text content..."}
            />

            <Spacer height={20} />

            <label>Upload your avatar: </label>
            <input
                type={"file"}
                placeholder={"Upload your avatar"}
                accept="image/*"
                onChange={(event) => {
                    const files = event.target.files;
                    if(files == null)
                        return;

                    const file = files[0];
                    onAvatarChanged(file);
                }}
            />

            <Spacer height={20} />

            <TextareaAutosize
                className={classes.textarea}
                onChange={(e) => { onNicknameChanged(e.target.value); }}
                value={nickname}
                placeholder={"Your nickname..."}
            />
        </div>
    );
};

export default ActualPost;
