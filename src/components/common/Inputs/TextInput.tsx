import React from "react";

interface Props {
    header:string;
    name:string;
    maxLength:number;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props:Props) =>{

    return(
        <p>
            <label>
                {props.header} <br/>
                <input
                    type='text'
                    name={props.name}
                    required
                    maxLength={props.maxLength}
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
        </p>
    )
}