import React from "react";
import classes from "./resultPopup.module.css";
import Button from "../../controls/button/button";
import {Spacer} from "../../controls/spacer/spacer";
import {useDispatch} from "react-redux";
import {hideResult} from "../../../features/tool/toolSlice";
import downloadBase64 from "../../../utils/downloadBase64";

interface ResultPopupProps {
    isVisible: boolean;
    resultImageUrl: string;
}

const ResultPopup = (props: ResultPopupProps) => {
    let resultPopupClass = classes.resultPopup + " ";
    if(props.isVisible){
        resultPopupClass += classes.shown;
    }

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(hideResult());
    };

    const onDownload = () => {
        downloadBase64(props.resultImageUrl, "output.png");
    };

    return (
        <div className={resultPopupClass}>
            <div className={classes.container}>
                <img src={props.resultImageUrl} alt={"Result image:"}/>
                <Spacer height={20}/>
                <Button onClick={onDownload}>Download Image</Button>
                <Spacer height={20}/>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    );
};

export default ResultPopup;
