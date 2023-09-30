import React, {useRef} from "react";
import classes from "./tool.module.css";
import ActualPost from "./actualPost/actualPost";
import Button from "../controls/button/button";
import domtoimage from "dom-to-image";
import SimplePostDummy from "../postDummies/simple/simplePostDummy";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import ResultPopup from "../popups/resultPopup/resultPopup";
import {showResult} from "../../features/tool/toolSlice";

const Tool = () => {
    const dispatcher = useDispatch();
    const renderContainer = useRef<HTMLDivElement>(null);

    // input
    const title = useSelector((state: RootState) => state.tool.title);
    const textContent = useSelector((state: RootState) => state.tool.textContent);
    const nickname = useSelector((state: RootState) => state.tool.nickname);
    const avatarBase64 = useSelector((state: RootState) => state.tool.avatarBase64);

    // result
    const isResultShown = useSelector((state: RootState) => state.tool.isResultShown);
    const resultImageBase64 = useSelector((state: RootState) => state.tool.resultImageBase64);

    const GenerateImage = (dom: Node) => {
        console.log("Generating image...");
        const firstChild = dom.firstChild as Node;
        domtoimage
            .toPng(firstChild)
            .then(function (dataUrl: string) {
                dispatcher(showResult(dataUrl));
                console.log(dataUrl);
            });
    };

    return (
        <>
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

                <div className={classes.renderContainer} ref={renderContainer}>
                    <SimplePostDummy
                        title={title}
                        textContent={textContent}
                        nickname={nickname}
                        avatarBase64={avatarBase64}
                    />
                </div>
            </div>

            <ResultPopup
                isVisible={isResultShown}
                resultImageUrl={resultImageBase64}
            />
        </>
    );
};

export default Tool;
