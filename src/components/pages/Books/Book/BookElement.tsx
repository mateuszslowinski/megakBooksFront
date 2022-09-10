import React from "react";

interface Props {
    className?: string;
    header?: string;
    value: string | number;
}

export const BookElement = ({className, header, value}: Props) => (
    <div className={className}>
        <p>{header}</p>
        <div>{value}</div>
    </div>
)
