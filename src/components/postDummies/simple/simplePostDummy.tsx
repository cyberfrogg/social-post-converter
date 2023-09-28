import React from "react";
import classes from "./simplePostDummy.module.css";

interface SimplePostDummyProps {
    title: string,
    textContent: string,
    nickname: string,
    avatarBase64: string,
}

const SimplePostDummy = (props: SimplePostDummyProps) => {
    return (
        <div className={classes.container} >
            <div className={classes.profile}>
                <img src={props.avatarBase64} alt={"Avatar image"} />
                <p>{props.nickname}</p>
            </div>
            <div className={classes.textContent}>
                <p>
                    {props.title}
                </p>
                <p>
                    {props.textContent}
                </p>
            </div>
        </div>
    );
};

export default SimplePostDummy;
