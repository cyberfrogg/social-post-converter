import React from "react";
import classes from "./actualPost.module.css";
import TextareaAutosize from "react-textarea-autosize";

const ActualPost = () => {
    return (
        <div className={classes.container}>

            <TextareaAutosize  className={classes.textarea}>
                Enter text here...
            </TextareaAutosize>
        </div>
    );
};

export default ActualPost;
