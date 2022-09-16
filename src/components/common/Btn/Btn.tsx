import React from "react";
import './Btn.css';

interface Props {
    text: string;
    onClick?: () => void;
}

export const Btn = ({text, onClick}: Props) => (
    <button className="btn" onClick={onClick}>{text}</button>
)
