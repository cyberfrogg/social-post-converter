import React from "react";
import classes from "./button.module.css";

interface ButtonProps {
    children:  string | React.ReactElement | React.ReactElement[];
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={classes.button} onClick={() => {
            if(props.onClick != undefined){
                props.onClick();
            }
        }}>
            {props.children}
        </button>
    );
};

export default Button;
