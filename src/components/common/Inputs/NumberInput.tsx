import React from "react";


interface Props {
    header: string;
    name: string;
    min: number;
    max: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const NumberInput = (props: Props) => {
    return (
        <p>
            <label>
                {props.header} <br/>
                <input
                    type='number'
                    name={props.name}
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
        </p>
    )

}
