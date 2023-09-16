import React from "react";
import classes from "./tool.module.css";
import ActualPost from "./actualPost/actualPost";

const Tool = () => {
    return (
        <div className={classes.tool}>
            <ActualPost/>
        </div>
    );
};

export default Tool;
