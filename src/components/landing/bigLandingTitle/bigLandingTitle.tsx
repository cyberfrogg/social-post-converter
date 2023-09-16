import React from "react";
import classes from "./bigLandingTitle.module.css";

interface BigLandingTitleProps {
    children:  string | React.ReactElement | React.ReactElement[];
}

const BigLandingTitle = (props: BigLandingTitleProps) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                {props.children}
            </h1>
        </div>
    );
};

export default BigLandingTitle;
