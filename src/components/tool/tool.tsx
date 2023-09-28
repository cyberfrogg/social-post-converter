import React, {useRef} from "react";
import classes from "./tool.module.css";
import ActualPost from "./actualPost/actualPost";
import Button from "../controls/button/button";
import domtoimage from "dom-to-image";
import SimplePostDummy from "../postDummies/simple/simplePostDummy";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Tool = () => {
    const renderContainer = useRef<HTMLDivElement>(null);
    const title = useSelector((state: RootState) => state.tool.title);
    const textContent = useSelector((state: RootState) => state.tool.textContent);
    const nickname = useSelector((state: RootState) => state.tool.nickname);
    const avatarBase64 = useSelector((state: RootState) => state.tool.avatarBase64);

    const GenerateImage = (dom: Node) => {
        console.log("Generating image...");
        domtoimage
            .toPng(dom)
            .then(function (dataUrl: string) {
                console.log(dataUrl);
            });
    };

    return (
        <div className={classes.tool}>
            <ActualPost/>
            <div className={classes.buttonsContainer}>
                <Button onClick={() => {
                    if(renderContainer.current != null){
                        GenerateImage(renderContainer.current);
                    }
                }}>
                    Generate Image
                </Button>
            </div>

            <div ref={renderContainer}>
                <SimplePostDummy
                    title={title}
                    textContent={textContent}
                    nickname={nickname}
                    avatarBase64={avatarBase64}
                />
            </div>
        </div>
    );
};

export default Tool;
