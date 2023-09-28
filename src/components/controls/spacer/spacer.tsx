import React from "react";

export interface SpacerProps {
    height: number
}

export const Spacer = (props: SpacerProps) => {
    return (
        <div style={{ height: props.height }}>

        </div>
    );
};