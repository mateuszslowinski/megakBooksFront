import React from "react";
import './Btn.css';


interface Props {
    text: string;
    onClick?: () => Promise<void>;
}

export const Btn = (props: Props) => {
    return (
        <button className="btn" onClick={props.onClick}>{props.text}</button>
    )
}