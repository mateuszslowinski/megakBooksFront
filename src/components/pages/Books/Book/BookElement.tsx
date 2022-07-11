import React from "react";

interface Props {
    class?:string;
    header?: string;
    value: string | number;
}

export const BookElement = (props:Props) => {

    return (
        <div className={props.class}>
            <p>{props.header}</p>
            <div>{props.value}</div>
        </div>
    )
}